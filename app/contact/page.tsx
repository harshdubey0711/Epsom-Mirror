import { BookButton } from "@/components/BookButton";
import { ContactForm } from "@/components/ContactForm";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact Us | Epsom Cryo Spa Mumbai",
  description:
    "Contact Epsom Cryo Spa. Call, email, or send a message to book your wellness consultation in Mumbai.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <main className="pt-24 pb-24 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <h1 className="font-display text-4xl text-epsom-ink">Contact Us</h1>
          <p className="text-epsom-muted mt-4">
            Fill out the form or reach us directly. We&apos;ll respond within 24 hours.
          </p>
          <div className="mt-10 space-y-6">
            <div>
              <h3 className="text-epsom-ink font-medium">Phone</h3>
              <p className="text-epsom-muted mt-1">
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
              <h3 className="text-epsom-ink font-medium">Email</h3>
              <a href="mailto:info@epsomcryospa.com" className="text-epsom-maroon hover:underline">
                info@epsomcryospa.com
              </a>
            </div>
            <div>
              <h3 className="text-epsom-ink font-medium">Flagship Address</h3>
              <p className="text-epsom-muted text-sm mt-1">
                Kamla Spaces, Shop no.6, S.V Road, Santacruz (West), Mumbai 400054
              </p>
            </div>
            <BookButton>Book Online</BookButton>
          </div>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
