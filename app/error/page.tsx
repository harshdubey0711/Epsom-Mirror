import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Error | Epsom Cryo Spa",
  description: "Something went wrong. Please contact Epsom Cryo Spa.",
  path: "/error/",
});

export default function ErrorPage() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4 py-24">
      <div className="glass-card p-12 text-center max-w-md">
        <h1 className="font-display text-3xl text-epsom-ink">Something went wrong</h1>
        <p className="text-epsom-muted mt-4">Please try again or contact us directly.</p>
        <Link href="/contact/" className="btn-primary mt-8 inline-block">
          Contact Us
        </Link>
      </div>
    </main>
  );
}
