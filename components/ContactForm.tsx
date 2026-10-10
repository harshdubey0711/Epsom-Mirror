"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setPending(true);
    setStatus(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const userMessage = String(data.get("message") || "").trim();

    // Name validation
    if (name.length < 2) {
      setStatus("Please enter your full name.");
      setPending(false);
      return;
    }

    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s.'-]+$/.test(name)) {
      setStatus("Please enter a valid name.");
      setPending(false);
      return;
    }

    // Email validation
    if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
    ) {
      setStatus("Please enter a valid email address.");
      setPending(false);
      return;
    }

    // Indian phone validation
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setStatus("Please enter a valid 10-digit Indian mobile number.");
      setPending(false);
      return;
    }

    // Message validation
    if (userMessage.length < 10) {
      setStatus("Please enter a message of at least 10 characters.");
      setPending(false);
      return;
    }

    if (userMessage.length > 2000) {
      setStatus("Your message must be less than 2000 characters.");
      setPending(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message: userMessage,
          website: data.get("website"),
        }),
      });

      if (res.ok) {
        router.push("/thankyou/");
        return;
      }

      const json = (await res.json().catch(() => null)) as {
        error?: string;
      } | null;

      setStatus(
        json?.error || "Something went wrong. Please try again."
      );

      if (res.status >= 500) {
        router.push("/error/");
      }
    } catch {
      setStatus("Unable to send message. Please try again.");
      router.push("/error/");
    } finally {
      setPending(false);
    }
  }

  const fieldClass =
    "w-full bg-epsom-mist border border-epsom-crystal/40 rounded-lg px-4 py-3 text-epsom-ink focus:border-epsom-maroon outline-none";

  return (
    <form
      onSubmit={onSubmit}
      className="glass-card p-8 space-y-5 relative"
    >
      <div
        className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="website">Website</label>

        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-sm text-epsom-muted mb-1"
        >
          Full Name
        </label>

        <input
          id="name"
          type="text"
          name="name"
          required
          minLength={2}
          maxLength={100}
          autoComplete="name"
          className={fieldClass}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm text-epsom-muted mb-1"
        >
          Email Address
        </label>

        <input
          id="email"
          type="email"
          name="email"
          required
          maxLength={150}
          autoComplete="email"
          className={fieldClass}
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm text-epsom-muted mb-1"
        >
          Phone Number
        </label>

        <input
          id="phone"
          type="tel"
          name="phone"
          required
          inputMode="numeric"
          autoComplete="tel"
          maxLength={10}
          minLength={10}
          pattern="[6-9][0-9]{9}"
          placeholder="Enter 10-digit mobile number"
          className={fieldClass}
          onInput={(e) => {
            const input = e.currentTarget;

            input.value = input.value
              .replace(/\D/g, "")
              .slice(0, 10);
          }}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm text-epsom-muted mb-1"
        >
          Your Message
        </label>

        <textarea
          id="message"
          name="message"
          rows={5}
          required
          minLength={10}
          maxLength={2000}
          placeholder="Tell us how we can help..."
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="btn-primary w-full"
        disabled={pending}
      >
        {pending ? "Sending…" : "Send Message"}
      </button>

      {status ? (
        <p className="text-sm text-epsom-maroon text-center">
          {status}
        </p>
      ) : null}
    </form>
  );
}