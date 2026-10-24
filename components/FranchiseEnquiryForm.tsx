"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  franchiseEnquiry,
  franchiseFormatOptions,
  franchiseInvestmentRanges,
} from "@/content/franchise";

export function FranchiseEnquiryForm() {
  const router = useRouter();
  const [status, setStatus] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setPending(true);
    setStatus(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const city = String(data.get("city") || "").trim();
    const format = String(data.get("format") || "").trim();
    const investment = String(data.get("investment") || "").trim();
    const userMessage = String(data.get("message") || "").trim();
    const phone = String(data.get("phone") || "").trim();

    // Phone number validation
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setStatus("Please enter a valid 10-digit Indian mobile number.");
      setPending(false);
      return;
    }

    const message = [
      "[Franchise Enquiry]",
      `Preferred City: ${city || "—"}`,
      `Preferred Format: ${format || "—"}`,
      `Planned Investment Range: ${investment || "—"}`,
      "",
      "About the enquirer:",
      userMessage || "—",
    ].join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone,
          message,
          website: data.get("website"),
          type: "franchise",
        }),
      });

      if (res.ok) {
        router.push("/thankyou/");
        return;
      }

      const json = (await res.json().catch(() => null)) as {
        error?: string;
      } | null;

      setStatus(json?.error || "Something went wrong. Please try again.");

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
  const labelClass = "block text-sm text-epsom-muted mb-1";

  return (
    <form onSubmit={onSubmit} className="glass-card p-8 space-y-5 relative">
      <h3 className="font-display text-2xl text-epsom-ink">
        {franchiseEnquiry.title}
      </h3>

      {/* Honeypot */}
      <div
        className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="franchise-website">Website</label>
        <input
          type="text"
          id="franchise-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="franchise-name" className={labelClass}>
          Full Name
        </label>
        <input
          id="franchise-name"
          type="text"
          name="name"
          required
          autoComplete="name"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="franchise-phone" className={labelClass}>
          Mobile Number
        </label>
        <input
          id="franchise-phone"
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
            input.value = input.value.replace(/\D/g, "").slice(0, 10);
          }}
        />
      </div>

      <div>
        <label htmlFor="franchise-email" className={labelClass}>
          Email Address
        </label>
        <input
          id="franchise-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          className={fieldClass}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="franchise-city" className={labelClass}>
            Preferred City
          </label>
          <input
            id="franchise-city"
            type="text"
            name="city"
            required
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="franchise-format" className={labelClass}>
            Preferred Franchise Format
          </label>
          <select
            id="franchise-format"
            name="format"
            required
            className={fieldClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select format
            </option>
            {franchiseFormatOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="franchise-investment" className={labelClass}>
          Planned Investment Range
        </label>
        <select
          id="franchise-investment"
          name="investment"
          className={fieldClass}
          defaultValue=""
        >
          <option value="">Select (optional)</option>
          {franchiseInvestmentRanges.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="franchise-message" className={labelClass}>
          Brief Introduction About Yourself or Your Business
        </label>
        <textarea
          id="franchise-message" 
          
          name="message"
          rows={5}
          required
          className={`${fieldClass} resize-none`}
        />
      </div>

      <p className="text-xs text-epsom-muted">{franchiseEnquiry.note}</p>

      <button type="submit" className="btn-primary w-full" disabled={pending}>
        {pending ? "Sending…" : franchiseEnquiry.submit}
      </button>

      {status ? (
        <p className="text-sm text-epsom-maroon text-center">{status}</p>
      ) : null}
    </form>
  );
}