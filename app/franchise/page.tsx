import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Franchise | Epsom Cryo Spa",
  description:
    "Explore franchise opportunities with Epsom Cryo Spa — Mumbai's premier cryotherapy and wellness brand.",
  path: "/franchise/",
});

export default function FranchisePage() {
  return (
    <main className="pt-16 pb-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="font-display text-4xl text-epsom-ink">Franchise With Epsom</h1>
        <p className="text-epsom-muted mt-6 leading-relaxed">
          Bring Mumbai&apos;s premier cryotherapy and wellness experience to new markets. Contact us to
          discuss partnership and franchise opportunities.
        </p>
        <Link href="/contact/" className="btn-primary mt-8 inline-block">
          Enquire Now
        </Link>
      </div>
    </main>
  );
}
