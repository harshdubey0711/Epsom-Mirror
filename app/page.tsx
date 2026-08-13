import { HomePage } from "@/components/home/HomePage";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Cryotherapy Mumbai | Premier Wellness Center – Epsom Cryo Spa",
  description:
    "Mumbai's premier cryotherapy & wellness center. Advanced recovery, IV drip therapy, biohacking, luxury spa & aesthetic treatments across Santacruz, Borivali & Andheri.",
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
