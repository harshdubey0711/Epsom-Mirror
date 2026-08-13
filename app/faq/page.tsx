import { FaqSection } from "@/components/FaqSection";
import { JsonLd } from "@/components/JsonLd";
import { faqItems, faqSchemaAnswers } from "@/content/faq";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "FAQ | Epsom Cryo Spa Mumbai",
  description:
    "Frequently asked questions about cryotherapy, IV drip therapy, and wellness treatments at Epsom Cryo Spa.",
  path: "/faq/",
});

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSchemaAnswers.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <main className="pt-8">
      <JsonLd data={faqSchema} />
      <FaqSection items={faqItems} />
    </main>
  );
}
