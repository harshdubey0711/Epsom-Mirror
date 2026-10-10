import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  website?: string;
  type?: string;
};

function isEmail(value: string) {
  return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value);
}

function isIndianMobile(value: string) {
  return /^[6-9]\d{9}$/.test(value);
}

function isValidName(value: string) {
  return /^[A-Za-zÀ-ÖØ-öø-ÿ\s.'-]+$/.test(value);
}

export async function POST(request: Request) {
  let body: ContactBody;

  // Parse JSON
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  // Honeypot spam check
  if (body.website && String(body.website).trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const message = String(body.message || "").trim();

  // Required fields
  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  // Name validation
  if (name.length < 2) {
    return NextResponse.json(
      { error: "Please enter your full name." },
      { status: 400 }
    );
  }

  if (name.length > 100) {
    return NextResponse.json(
      { error: "Name is too long." },
      { status: 400 }
    );
  }

  if (!isValidName(name)) {
    return NextResponse.json(
      { error: "Please enter a valid name." },
      { status: 400 }
    );
  }

  // Email validation
  if (email.length > 150) {
    return NextResponse.json(
      { error: "Email address is too long." },
      { status: 400 }
    );
  }

  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  // Phone validation
  if (!isIndianMobile(phone)) {
    return NextResponse.json(
      {
        error: "Please enter a valid 10-digit Indian mobile number.",
      },
      { status: 400 }
    );
  }

  // Message validation
  if (message.length < 10) {
    return NextResponse.json(
      { error: "Message must be at least 10 characters." },
      { status: 400 }
    );
  }

  if (message.length > 5000) {
    return NextResponse.json(
      { error: "Message is too long." },
      { status: 400 }
    );
  }

  const to =
    process.env.CONTACT_TO_EMAIL || "info@epsomcryospa.com";

  const from =
    process.env.CONTACT_FROM_EMAIL ||
    "Epsom Cryo Spa <onboarding@resend.dev>";

  const isFranchise =
    String(body.type || "").toLowerCase() === "franchise";

  const subject = isFranchise
    ? `Franchise Enquiry from ${name}`
    : `New Contact Form Submission from ${name}`;

  const text = [
    "You have received a new message:",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;

  // Development fallback when Resend is not configured
  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.info(
        "[contact] RESEND_API_KEY not set — logging submission:\n",
        text
      );

      return NextResponse.json({
        ok: true,
        mocked: true,
      });
    }

    console.error(
      "[contact] RESEND_API_KEY is not configured"
    );

    return NextResponse.json(
      { error: "Mail service is not configured." },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(apiKey);

    const result = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject,
      text,
    });

    if (result.error) {
      console.error(
        "[contact] Resend error",
        result.error
      );

      return NextResponse.json(
        { error: "Failed to send message." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
    });
  } catch (err) {
    console.error(
      "[contact] Unexpected error",
      err
    );

    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}