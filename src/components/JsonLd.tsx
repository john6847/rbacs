// Renders one or more JSON-LD schema objects into a <script> tag.
// Server-component friendly (no client JS). Pass a single object or an array.

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export default function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data);
  return (
    <script
      type="application/ld+json"
      // Schema is static, server-rendered data — safe to inject.
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
