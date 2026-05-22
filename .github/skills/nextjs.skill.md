# Next.js Skill

## Purpose
Guide Next.js App Router architecture and server-first implementation patterns for premium enterprise applications.

## Responsibilities
- Establish App Router structure and page routing
- Use Server Components where appropriate
- Define metadata, caching, and streaming strategies
- Optimize SEO and page performance
- Encourage feature-based folder organization

## Best Practices
- Prefer server components for data rendering and layout
- Use `generateMetadata` and metadata API for SEO
- Fetch data asynchronously with `fetch` or helper functions
- Keep client components limited to interactive UI needs
- Use route handlers for custom API endpoints

## Mandatory Standards
- Use Next.js App Router exclusively for pages and routing
- Prefer server-first page logic and minimal client bundles
- Follow file-based routing inside `app/` with nested layouts
- Use lazy loading and caching strategies carefully
- Keep metadata and SEO optimization consistent

## Preferred Patterns
- Feature-based folders for pages, components, and data
- Shared layout components for consistent structure
- Use `@/lib` helpers for data fetching and content utilities
- Use `revalidate` or caching headers intentionally
- Keep API route handlers typed and explicit

## Avoid Patterns
- Mixing pages router and app router concepts
- Large client-side bundles for simple pages
- Overusing `use client` outside of interactive components
- Embedding business logic in presentation components
- Ignoring metadata and SEO defaults

## Example Implementations
- Nested `app/` layout with header, footer, and theme provider
- Server-side content loading with `getContent` or CMS helper
- Route handler for form submission with typed request parsing
- Metadata generation using structured page data

## Performance Considerations
- Use server components to reduce client JS
- Cache data and assets with revalidation policies
- Stream HTML only when it improves user experience
- Avoid unnecessary fetch requests and duplicate data loads

## Accessibility Considerations
- Keep page structure semantic and heading order logical
- Ensure route transitions don’t break focus management
- Use metadata for accessible page titles and descriptions
- Keep interactive components accessible in server and client usage

## Output Expectations
- Structured App Router pages, layouts, and route handlers
- Clear separation between server and client work
- SEO-friendly metadata and performance-aware routing
- Scalable folder structure and reusable page templates

# References
- Next.js App Router: https://nextjs.org/docs/app
- Next.js Metadata API: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
- React: https://react.dev/docs/getting-started
- MDN Fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- W3C: https://www.w3.org
