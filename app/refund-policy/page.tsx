import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Refund Policy | Epsom Cryo Spa",
  description: "Refund policy for Epsom Cryo Spa treatments and packages.",
  path: "/refund-policy/",
});

export default function RefundPolicyPage() {
  return (
    <main className="pt-16 pb-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl text-epsom-ink">Refund Policy</h1>
        <p className="text-epsom-muted mt-6 leading-relaxed">
          Packages and single sessions are subject to Epsom Cryo Spa booking and cancellation terms. For
          refund or rescheduling requests, please contact us at{" "}
          <a href="mailto:info@epsomcryospa.com" className="text-epsom-maroon hover:underline">
            info@epsomcryospa.com
          </a>{" "}
          or call{" "}
          <a href="tel:+919867670762" className="text-epsom-maroon hover:underline">
            +91 9867670762
          </a>{" "}
          with your booking details.
        </p>
        <Link href="/contact/" className="btn-outline mt-8 inline-block">
          Contact Us
        </Link>
      </div>
    </main>
  );
}
