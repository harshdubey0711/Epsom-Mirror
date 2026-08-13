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

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
          website: data.get("website"),
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

  return (
    <form onSubmit={onSubmit} className="glass-card p-8 space-y-5 relative">
      <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <label htmlFor="name" className="block text-sm text-epsom-muted mb-1">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="w-full bg-epsom-mist border border-epsom-crystal/40 rounded-lg px-4 py-3 text-epsom-ink focus:border-epsom-maroon outline-none"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-epsom-muted mb-1">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full bg-epsom-mist border border-epsom-crystal/40 rounded-lg px-4 py-3 text-epsom-ink focus:border-epsom-maroon outline-none"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm text-epsom-muted mb-1">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          required
          className="w-full bg-epsom-mist border border-epsom-crystal/40 rounded-lg px-4 py-3 text-epsom-ink focus:border-epsom-maroon outline-none"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-epsom-muted mb-1">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full bg-epsom-mist border border-epsom-crystal/40 rounded-lg px-4 py-3 text-epsom-ink focus:border-epsom-maroon outline-none resize-none"
        />
      </div>
      <button type="submit" className="btn-primary w-full" disabled={pending}>
        {pending ? "Sending…" : "Send Message"}
      </button>
      {status ? <p className="text-sm text-epsom-maroon text-center">{status}</p> : null}
    </form>
  );
}
