import { BookButton } from "@/components/BookButton";
import { ContactForm } from "@/components/ContactForm";
import { buildMetadata } from "@/lib/metadata";
import Image from "next/image";

export const metadata = buildMetadata({
  title: "Contact Us | Epsom Cryo Spa Mumbai",
  description:
    "Contact Epsom Cryo Spa. Call, email, or send a message to book your wellness consultation in Mumbai.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <main className="bg-epsom-salt overflow-x-hidden">
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden sm:min-h-[60vh] md:min-h-[70vh]">
        <Image
          src="/assets/images/epsom-final-images/contact-banner-pc.png"
          alt="epsom wellness about us banner"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 pt-16 text-center">
          <h1 className="font-display text-3xl leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            We’re Here for You
          </h1>

          <p className="mt-4 text-sm text-white/90 sm:text-base">
            Book Your Wellness Experience
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="min-w-0">
          <h1 className="font-display text-3xl text-epsom-ink sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-4 text-epsom-muted">
            Fill out the form or reach us directly. We&apos;ll respond within 24
            hours.
          </p>
          <div className="mt-8 space-y-6 md:mt-10">
            <div>
              <h3 className="font-medium text-epsom-ink">Phone</h3>
              <p className="mt-1 text-epsom-muted">
                <a href="tel:+919867670764" className="hover:text-epsom-maroon">
                  +91 9867670764
                </a>
              </p>
              <p className="text-epsom-muted">
                <a href="tel:+919867670762" className="hover:text-epsom-maroon">
                  +91 9867670762
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-medium text-epsom-ink">Email</h3>
              <a
                href="mailto:info@epsomcryospa.com"
                className="break-words text-epsom-maroon hover:underline"
              >
                info@epsomcryospa.com
              </a>
            </div>
            <div>
              <h3 className="font-medium text-epsom-ink">Flagship Address</h3>
              <p className="mt-1 text-sm text-epsom-muted">
                Kamla Spaces, Shop no.6, S.V Road, Santacruz (West), Mumbai
                400054
              </p>
            </div>
            <BookButton>Book Online</BookButton>
          </div>
        </div>

        <div className="min-w-0">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}