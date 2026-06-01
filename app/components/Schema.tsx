'use client';

interface SchemaProps {
  data: Record<string, unknown>;
}

/**
 * Schema Component - Renders JSON-LD structured data
 * Use this component to inject schema markup into your pages
 *
 * Example:
 * <Schema data={organizationSchema} />
 */
export function Schema({ data }: SchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      suppressHydrationWarning
    />
  );
}
