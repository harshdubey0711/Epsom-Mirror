import { BookButton } from "@/components/BookButton";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Memberships & Packages | Epsom Cryo Spa",
  description: "Recovery, Biohack Elite, and Glow membership packages at Epsom Cryo Spa Mumbai.",
  path: "/memberships/",
});

export default function MembershipsPage() {
  return (
    <main className="pt-24 pb-24 px-4">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="font-display text-4xl md:text-5xl text-epsom-ink">Membership Packages</h1>
        <p className="text-epsom-muted mt-4 max-w-2xl mx-auto">
          Invest in your wellness with exclusive packages designed for recovery, performance, and beauty.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <article className="glass-card p-8 flex flex-col">
          <h2 className="text-2xl font-display text-epsom-ink">Recovery Membership</h2>
          <p className="text-epsom-muted text-sm mt-2">For active recovery seekers</p>
          <ul className="text-epsom-muted text-sm mt-6 space-y-3 flex-1">
            <li>✓ 4 Cryotherapy Sessions</li>
            <li>✓ Compression Therapy</li>
            <li>✓ Red Light Therapy</li>
            <li>✓ Member pricing on add-ons</li>
          </ul>
          <p className="text-epsom-maroon font-semibold mt-6">Contact for pricing</p>
          <BookButton className="btn-outline mt-6 w-full">Get Started</BookButton>
        </article>
        <article className="glass-card p-8 flex flex-col border-epsom-maroon/40 shadow-glow-lg relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 tag-pill">Most Popular</span>
          <h2 className="text-2xl font-display text-epsom-ink mt-2">Biohack Elite</h2>
          <p className="text-epsom-muted text-sm mt-2">Unlimited recovery access</p>
          <ul className="text-epsom-muted text-sm mt-6 space-y-3 flex-1">
            <li>✓ Unlimited Recovery Access</li>
            <li>✓ IV Drips Included</li>
            <li>✓ Priority Booking</li>
            <li>✓ Concierge Wellness Planning</li>
          </ul>
          <p className="text-epsom-maroon font-semibold mt-6">Contact for pricing</p>
          <BookButton className="btn-primary mt-6 w-full">Join Elite</BookButton>
        </article>
        <article className="glass-card p-8 flex flex-col">
          <h2 className="text-2xl font-display text-epsom-ink">Glow & Aesthetic</h2>
          <p className="text-epsom-muted text-sm mt-2">Beauty from within & out</p>
          <ul className="text-epsom-muted text-sm mt-6 space-y-3 flex-1">
            <li>✓ Monthly Facials</li>
            <li>✓ Skin Treatments</li>
            <li>✓ LED Therapy</li>
            <li>✓ IV Glow Drips</li>
          </ul>
          <p className="text-epsom-maroon font-semibold mt-6">Contact for pricing</p>
          <BookButton className="btn-outline mt-6 w-full">Get Started</BookButton>
        </article>
      </div>
      <p className="text-center text-epsom-muted text-sm mt-12 max-w-xl mx-auto">
        All memberships are subject to terms. Select your location when booking to view branch-specific
        availability.
      </p>
    </main>
  );
}
