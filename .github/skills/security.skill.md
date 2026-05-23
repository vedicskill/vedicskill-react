# Security Skill

## Purpose
Provide secure coding practices and review guidance for Next.js applications in this repository.

## Responsibilities
- Enforce input validation and data sanitization
- Secure authentication and authorization flows
- Protect API routes and environment variables
- Guide secure storage and secret handling
- Identify security anti-patterns and risks

## Best Practices
- Validate all input with Zod or server-side checks
- Use secure authentication mechanisms and least privilege
- Keep secrets in environment variables, never committed
- Use typed API responses and error handling
- Guard server-side data access and route handlers

## Mandatory Standards
- Use server-side validation for all user input
- Avoid exposing sensitive data in client bundles
- Enforce secure API access patterns and authorization checks
- Sanitize and validate request payloads before processing
- Use HTTPS-friendly patterns and secure headers when possible

## Preferred Patterns
- Centralized validation with Zod schemas
- Typed API route middleware or helper wrappers
- Secure use of `next-auth`, Supabase, or custom auth patterns
- Guarded database queries with explicit filters
- Minimal client-side secrets and safe runtime config usage

## Avoid Patterns
- Trusting client input without server validation
- Storing secrets in code or public configuration files
- Using weak or inconsistent authorization checks
- Returning raw error messages or stack traces to clients
- Hard-coding authentication rules in UI components

## Example Implementations
- Zod schema validation on route handler request bodies
- Secure session check before processing API requests
- Environment-based configuration using `process.env`
- Minimal error responses with benign messages

## Performance Considerations
- Secure validation has minimal performance cost
- Keep validation logic efficient and reusable
- Use middleware patterns to avoid repeated checks

## Accessibility Considerations
- Security must not degrade user experience
- Provide clear, accessible error messaging for form validation
- Keep authentication flows readable and understandable

## Output Expectations
- Secure endpoint and form handling patterns
- Reusable validation and auth helper structures
- Clear guidance on secret and environment variable usage
- Secure-by-design API and data handling

# References
- OWASP Secure Coding: https://owasp.org/www-project-secure-coding-practices/
- Next.js Security: https://nextjs.org/docs/advanced-features/security
- Zod: https://zod.dev
- MDN Security: https://developer.mozilla.org/en-US/docs/Web/Security
- Prisma Security: https://www.prisma.io/docs/guides/security
