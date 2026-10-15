import Link from "next/link";
import { seoNav } from "@/lib/site";

export function PopularSearches() {
  return (
    <section className="py-12 px-4 border-t border-epsom-crystal/40 bg-epsom-teal">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-epsom-muted mb-4">
          Popular Searches
        </h2>

        <p className="text-sm text-epsom-muted leading-relaxed flex flex-wrap gap-x-2 gap-y-1">
          {seoNav.popularSearches.map((search, index) => (
            <span key={`${search.href}-${index}`}>
              <Link
                href={`/${search.href}`}
                className="hover:text-epsom-maroon"
              >
                {search.label}
              </Link>

              {index < seoNav.popularSearches.length - 1 && " | "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}