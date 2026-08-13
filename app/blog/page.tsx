import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Blog | Epsom Cryo Spa",
  description: "Wellness insights, recovery tips, and biohacking articles from Epsom Cryo Spa.",
  path: "/blog/",
});

export default function BlogPage() {
  return (
    <main className="pt-32 pb-24 px-4 text-center min-h-[60vh]">
      <h1 className="font-display text-4xl text-epsom-ink">Wellness Blog</h1>
      <p className="text-epsom-muted mt-4 max-w-md mx-auto">
        Articles on cryotherapy, IV wellness, aesthetics, and longevity coming soon.
      </p>
      <Link href="/" className="btn-primary mt-8 inline-block">
        Explore Services
      </Link>
    </main>
  );
}
