import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Thank You | Epsom Cryo Spa",
  description: "Your message has been received by Epsom Cryo Spa.",
  path: "/thankyou/",
});

export default function ThankYouPage() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4 py-24">
      <div className="glass-card p-12 text-center max-w-md">
        <h1 className="font-display text-3xl text-epsom-ink">Thank You!</h1>
        <p className="text-epsom-muted mt-4">
          Your message has been received. We&apos;ll be in touch shortly.
        </p>
        <Link href="/" className="btn-primary mt-8 inline-block">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
