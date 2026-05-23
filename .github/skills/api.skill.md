# API Skill

## Purpose
Provide guidance for building typed, secure, and maintainable REST APIs and route handlers in Next.js.

## Responsibilities
- Define API route handler patterns and typed responses
- Enforce request validation and error handling
- Support authentication and authorization middleware
- Promote reusable API utilities and typed contracts
- Keep API behavior consistent and predictable

## Best Practices
- Use route handlers in `app/api` for REST endpoints
- Validate request payloads with Zod or equivalent schemas
- Return typed JSON responses and explicit status codes
- Handle errors consistently with safe fallback responses
- Keep API logic separated from UI components

## Mandatory Standards
- Use typed request and response schema validation
- Avoid leaking internal implementation details in responses
- Use secure authentication checks for protected routes
- Enforce clear error handling and status codes
- Use consistent API contract naming and structure

## Preferred Patterns
- Centralize API validation and response helpers
- Use middleware wrappers for auth and common parsing
- Keep endpoint handlers small and composable
- Use helper functions to parse JSON bodies and query params
- Document API contracts and expected payloads

## Avoid Patterns
- Parsing request bodies manually without validation
- Returning generic 500 errors without context
- Embedding API logic directly in page components
- Using untyped data across API boundaries
- Making APIs depend on client-side assumptions

## Example Implementations
- Route handler for form submission with Zod request schema
- Authenticated API endpoint for fetching user-specific data
- Reusable response helpers for success and error payloads
- Typed query parsing and validation for route params

## Performance Considerations
- Keep API handlers lean and synchronous where possible
- Avoid unnecessary database calls or nested queries
- Cache or memoize repeated computation if safe
- Use status-based caching headers for static-like responses

## Accessibility Considerations
- Provide meaningful error messages that are easy to surface in UI
- Keep API responses structured for client-side validation feedback
- Avoid vague error codes without helpful messaging

## Output Expectations
- Typed, secure, and maintainable API route patterns
- Consistent validation and error handling across routes
- Clear separation between API and UI responsibilities
- Reusable middleware and contract-based APIs

# References
- Next.js Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers
- Zod: https://zod.dev
- MDN Fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- OWASP API Security: https://owasp.org/www-project-api-security/
