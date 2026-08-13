import { BookButton } from "@/components/BookButton";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About Us | Epsom Cryo Spa Mumbai",
  description: "Learn about Epsom Cryo Spa — Mumbai's luxury recovery and biohacking wellness center.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <main className="pt-24">
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-epsom-accent/10 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="font-display text-4xl md:text-5xl text-epsom-ink">About Epsom Cryo Spa</h1>
          <p className="text-epsom-maroon mt-4 uppercase tracking-widest text-sm">
            Luxury Recovery & Biohacking Wellness Center
          </p>
        </div>
      </section>
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <p className="text-epsom-muted leading-relaxed text-lg">
          Epsom Cryo Spa & Aesthetic is a premier destination for cutting-edge cryotherapy, wellness, and
          aesthetic services in Mumbai. We are designed to revitalize your body, rejuvenate your mind, and
          elevate your well-being through advanced science-led treatments.
        </p>
        <p className="text-epsom-muted leading-relaxed mt-6">
          Our state-of-the-art facilities offer a serene, luxury environment where certified professionals
          prioritize safety, comfort, and effectiveness in every session. From whole-body cryotherapy to IV
          cellular wellness and non-invasive aesthetics, we deliver a complete inside-out transformation
          experience.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="glass-card p-6 text-center">
            <p className="text-3xl font-display text-epsom-maroon">3</p>
            <p className="text-epsom-muted text-sm mt-2">Locations Across Mumbai</p>
          </div>
          <div className="glass-card p-6 text-center">
            <p className="text-3xl font-display text-epsom-maroon">40+</p>
            <p className="text-epsom-muted text-sm mt-2">Advanced Treatments</p>
          </div>
          <div className="glass-card p-6 text-center">
            <p className="text-3xl font-display text-epsom-maroon">#1</p>
            <p className="text-epsom-muted text-sm mt-2">Cryotherapy Center in Mumbai</p>
          </div>
        </div>
        <div className="text-center mt-16">
          <BookButton>Book a Consultation</BookButton>
        </div>
      </section>
    </main>
  );
}
