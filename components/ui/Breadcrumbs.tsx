import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.webspires.com.pk"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label.replace(/<[^>]+>/g, ""),
        "item": `https://www.webspires.com.pk${item.href}`
      }))
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="flex flex-wrap items-center gap-2 text-sm text-brand-gray mb-8">
        <Link href="/" className="hover:text-brand-red transition-colors font-medium">
          Home
        </Link>
        {items.map((item, index) => (
          <div key={item.href} className="flex items-center gap-2">
            <span className="text-brand-gray/50">/</span>
            {index === items.length - 1 ? (
              <span className="text-brand-red font-medium truncate" dangerouslySetInnerHTML={{ __html: item.label }} />
            ) : (
              <Link href={item.href} className="hover:text-brand-red transition-colors font-medium" dangerouslySetInnerHTML={{ __html: item.label }} />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
