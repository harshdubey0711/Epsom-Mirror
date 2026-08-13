import Link from "next/link";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="text-sm text-epsom-muted mb-6" aria-label="Breadcrumb">
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <span key={`${item.label}-${i}`}>
            {i > 0 ? <span className="mx-2">/</span> : null}
            {last || !item.href ? (
              <span className={last ? "text-epsom-maroon" : undefined} aria-current={last ? "page" : undefined}>
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-epsom-maroon">
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
