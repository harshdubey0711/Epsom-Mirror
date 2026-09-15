import { BookButton } from "@/components/BookButton";
import { buildMetadata } from "@/lib/metadata";
import Image from "next/image";

export const metadata = buildMetadata({
  title: "About Us | Epsom Cryo Spa Mumbai",
  description: "Learn about Epsom Cryo Spa — Mumbai's luxury recovery and biohacking wellness center.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <main>
      {/* <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-epsom-accent/10 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="font-display text-4xl md:text-5xl text-epsom-ink">About Epsom Cryo Spa</h1>
          <p className="text-epsom-maroon mt-4 uppercase tracking-widest text-sm">
            Luxury Recovery & Biohacking Wellness Center
          </p>
        </div>
      </section> */}

        <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
          <Image
          src="/assets/images/about/about-us-3.png"
          alt="epsom wellness about us banner"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50"/>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
          About Epsom Wellness
          </h1>

          <p className="text-white/90 mt-4">
          A premium wellness destination focused on recovery, longevity, pain management, body transformation, rejuvenation and relaxation.
          </p>
          </div>

        </section>



        <section className=" bg-white/40 py-16 md:py-24 px-4">

        <div className="max-w-6xl mx-auto">
        <h2 className="section-heading !text-3xl md:!text-4xl">
          The Epsom Story
        </h2>


        <div className="flex flex-col md:flex-row items-start gap-2 ">
          <div className="flex flex-col md:flex-col items center gap-4 max-w-[640px]">
          <h3 className="font-bold text-1xl md:text-2xl my-2">
        Redefining Wellness In Mumbai
        </h3>
        <p className="text-epsom-maroon ">
        Epsom Wellness was created with one vision — to bring world-class wellness, recovery, and longevity therapies to India in a luxurious yet medically guided environment. </p>
        <p className="text-epsom-muted leading-relaxed">
        Inspired by international wellness clinics and recovery centers used by athletes, celebrities, entrepreneurs, and high performers globally, Epsom Wellness combines advanced biohacking therapies with holistic healing practices to create transformative wellness experiences.
<br />
<br />
What started as a specialized cryotherapy and recovery concept has evolved into one of Mumbai’s most innovative wellness destinations offering cryotherapy, IV drips, infrared therapies, compression recovery, aesthetic rejuvenation, advanced facials, body therapies, and luxury spa experiences under one roof.
<br />
<br />
Today, Epsom Wellness serves clients ranging from fitness enthusiasts and athletes to working professionals, models, entrepreneurs, and individuals seeking better recovery, anti-aging support, stress management, and holistic wellness.
        </p>
          </div>
       

      <div className="relative w-full md:w-1/2 h-[400px] overflow-hidden">
        <Image
          src="/assets/images/about/about-us-feature.jpeg"
          alt="Ipsum Gyrospa"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

    </div>
  </div>
</section>



      <section className="py-16 px-4 max-w-4xl mx-auto">
        <p className="text-epsom-muted leading-relaxed text-lg">
          Epsom Wellness is a premier destination for cutting-edge cryotherapy, wellness, and
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
