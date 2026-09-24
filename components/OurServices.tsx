import Link from "next/link";
import type { TreatmentRef } from "@/lib/types";

type Props = {
  treatments: TreatmentRef[];
};

export default function OurServices({ treatments }: Props) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="section-heading">
            Our Services
          </h2>
        </div>

        <ul className="mt-10 grid sm:grid-cols-2 gap-4 list-none p-0">

          {treatments.map((treatment) => (
            <li key={treatment.name}>
              <Link
                href={`/${treatment.slug}/`}
                className="glass-card-hover p-5 block text-epsom-ink hover:text-epsom-maroon"
              >
                <h3 className="font-medium">
                  {treatment.name}
                </h3>

                {treatment.description && (
                  <p className="text-epsom-muted text-sm mt-2 leading-relaxed">
                    {treatment.description}
                  </p>
                )}

                {treatment.bestSuitedFor && (
                  <p className="text-epsom-muted text-sm mt-3">
                    <span className="font-medium text-epsom-ink">
                      Best suited for:
                    </span>{" "}
                    {treatment.bestSuitedFor}
                  </p>
                )}
              </Link>
            </li>
          ))}

        </ul>

      </div>
    </section>
  );
}