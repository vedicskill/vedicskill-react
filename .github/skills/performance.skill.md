# Performance Skill

## Purpose
Guide performance optimization for fast, efficient, and scalable Next.js applications.

## Responsibilities
- Optimize rendering and asset loading
- Improve Core Web Vitals and Lighthouse metrics
- Reduce bundle size and runtime overhead
- Promote lazy loading and code splitting
- Optimize images and caching

## Best Practices
- Use server components to minimize client JS
- Optimize images with Next.js image component or `next/image`
- Lazy load non-critical components and assets
- Minimize unnecessary re-renders and state updates
- Use caching strategies for data and assets

## Mandatory Standards
- Prioritize performance in every UI and API change
- Avoid large client-side bundles when server rendering is sufficient
- Optimize images, fonts, and static assets
- Use modern browser-friendly code splitting patterns
- Keep page loads and time-to-first-byte low

## Preferred Patterns
- Route-level code splitting and dynamic imports
- Memoize expensive computations and component props
- Use `loading="lazy"` for non-critical images and iframes
- Prefetch only essential resources and routes
- Use stable keys for list rendering and DOM reconciliation

## Avoid Patterns
- Rendering large component trees on the client unnecessarily
- Heavy client-side state or effects for static content
- Inlining large assets or uncompressed media
- Blocking scripts or synchronous layout thrashing
- Overusing animation libraries for simple transitions

## Example Implementations
- Lazily imported dashboard card components
- Optimized hero image with appropriate sizes and `srcSet`
- Cached data-fetching helpers using revalidation headers
- Minimal client bundle for interactive widget components

## Performance Considerations
- Use Lighthouse and Core Web Vitals checks as part of standard review
- Prefer CSS transitions and native browser behavior
- Optimize critical rendering path for first meaningful paint
- Avoid repeated re-fetching and duplicate asset loads

## Accessibility Considerations
- Performance must not sacrifice readability or focus states
- Keep animations subtle and respect reduced motion preferences
- Ensure theme switching remains responsive and smooth

## Output Expectations
- Fast-loading pages and efficient render behavior
- Lowered bundle size and runtime work
- Responsive components that avoid jank
- Clear performance optimization patterns in code

# References
- Next.js Performance: https://nextjs.org/docs/advanced-features/measuring-performance
- React Performance: https://react.dev/learn/optimizing-performance
- Tailwind CSS: https://tailwindcss.com/docs/performance
- MDN Web Performance: https://developer.mozilla.org/en-US/docs/Web/Performance
- Google Lighthouse: https://developers.google.com/web/tools/lighthouse
# Performance Skill

## Purpose
Guide performance optimization for fast, efficient, and scalable Next.js applications.

## Responsibilities
- Optimize rendering and asset loading
- Improve Core Web Vitals and Lighthouse metrics
- Reduce bundle size and runtime overhead
- Promote lazy loading and code splitting
- Optimize images and caching

## Best Practices
- Use server components to minimize client JS
- Optimize images with Next.js image component or `next/image`
- Lazy load non-critical components and assets
- Minimize unnecessary re-renders and state updates
- Use caching strategies for data and assets

## Mandatory Standards
- Prioritize performance in every UI and API change
- Avoid large client-side bundles when server rendering is sufficient
- Optimize images, fonts, and static assets
- Use modern browser-friendly code splitting patterns
- Keep page loads and time-to-first-byte low

## Preferred Patterns
- Route-level code splitting and dynamic imports
- Memoize expensive computations and component props
- Use `loading=