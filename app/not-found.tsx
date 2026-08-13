import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4 py-24">
      <div className="glass-card p-12 text-center max-w-md">
        <h1 className="font-display text-3xl text-epsom-ink">Page not found</h1>
        <p className="text-epsom-muted mt-4">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <Link href="/" className="btn-primary mt-8 inline-block">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
