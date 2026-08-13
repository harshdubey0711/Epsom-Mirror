import Image from "next/image";
import Link from "next/link";
import type { TreatmentCard as TreatmentCardData } from "@/lib/types";

export function TreatmentCard({ treatment }: { treatment: TreatmentCardData }) {
  return (
    <Link href={`/${treatment.slug}/`} className="treatment-card">
      <div className="treatment-card-media">
        <Image
          src={treatment.image}
          alt={treatment.name}
          fill
          sizes="288px"
          className="object-cover"
        />
      </div>
      <div className="treatment-card-body">
        <h3 className="font-semibold text-epsom-ink">{treatment.name}</h3>
        <p className="text-epsom-muted text-sm mt-2">{treatment.description}</p>
        <div className="treatment-card-rule" aria-hidden="true" />
      </div>
    </Link>
  );
}
