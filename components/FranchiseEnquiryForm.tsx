"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { franchiseInvestmentRanges } from "@/content/franchise";

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
    const state = String(data.get("state") || "").trim();
    const investment = String(data.get("investment") || "").trim();
    const background = String(data.get("background") || "").trim();
    const userMessage = String(data.get("message") || "").trim();

    const message = [
      "[Franchise Enquiry]",
      `Preferred City: ${city || "—"}`,
      `State: ${state || "—"}`,
      `Investment Range: ${investment && investment !== "Select (optional)" ? investment : "—"}`,
      `Background: ${background || "—"}`,
      "",
      "Message:",
      userMessage,
    ].join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message,
          website: data.get("website"),
          type: "franchise",
        }),
      });
      if (res.ok) {
        router.push("/thankyou/");
        return;
      }
      const json = (await res.json().catch(() => null)) as { error?: string } | null;
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

  return (
    <form onSubmit={onSubmit} className="glass-card p-8 space-y-5 relative">
      <h3 className="font-display text-2xl text-epsom-ink">Franchise Enquiry Form</h3>
      <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="franchise-website">Website</label>
        <input type="text" id="franchise-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <label htmlFor="franchise-name" className="block text-sm text-epsom-muted mb-1">
          Full Name
        </label>
        <input id="franchise-name" type="text" name="name" required className={fieldClass} />
      </div>
      <div>
        <label htmlFor="franchise-email" className="block text-sm text-epsom-muted mb-1">
          Email
        </label>
        <input id="franchise-email" type="email" name="email" required className={fieldClass} />
      </div>
      <div>
        <label htmlFor="franchise-phone" className="block text-sm text-epsom-muted mb-1">
          Phone
        </label>
        <input id="franchise-phone" type="tel" name="phone" required className={fieldClass} />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="franchise-city" className="block text-sm text-epsom-muted mb-1">
            Preferred City
          </label>
          <input id="franchise-city" type="text" name="city" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="franchise-state" className="block text-sm text-epsom-muted mb-1">
            State
          </label>
          <input id="franchise-state" type="text" name="state" required className={fieldClass} />
        </div>
      </div>
      <div>
        <label htmlFor="franchise-investment" className="block text-sm text-epsom-muted mb-1">
          Investment Range
        </label>
        <select id="franchise-investment" name="investment" className={fieldClass} defaultValue="Select (optional)">
          {franchiseInvestmentRanges.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="franchise-background" className="block text-sm text-epsom-muted mb-1">
          Background
        </label>
        <input
          id="franchise-background"
          type="text"
          name="background"
          placeholder="e.g. business, medical, hospitality"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="franchise-message" className="block text-sm text-epsom-muted mb-1">
          Message
        </label>
        <textarea
          id="franchise-message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your interest, timeline, and preferred location..."
          className={`${fieldClass} resize-none`}
        />
      </div>
      <p className="text-xs text-epsom-muted">
        By submitting, you agree to be contacted regarding franchise and expansion opportunities.
      </p>
      <button type="submit" className="btn-primary w-full" disabled={pending}>
        {pending ? "Sending…" : "Submit Franchise Enquiry"}
      </button>
      {status ? <p className="text-sm text-epsom-maroon text-center">{status}</p> : null}
    </form>
  );
}
