# Database Skill

## Purpose
Provide guidance for scalable Prisma and PostgreSQL schema design, query optimization, and database architecture.

## Responsibilities
- Define Prisma schema and relations for the application domain
- Promote efficient query patterns and indexing
- Guide migrations and versioned schema changes
- Encourage secure database access and connection handling
- Support maintainable database architecture

## Best Practices
- Use Prisma models with clear relations and explicit fields
- Keep schema normalized and avoid overly broad models
- Use indexes for frequent query fields and joins
- Keep migrations small and reviewable
- Use typed Prisma client queries and safe filters

## Mandatory Standards
- Use Prisma and PostgreSQL as the primary database stack
- Avoid raw SQL unless necessary for performance
- Validate data at both API and database boundaries
- Keep database schema aligned with app domain models
- Use connection pooling and secure credentials management

## Preferred Patterns
- Modular Prisma schema organization with enums and relations
- Reusable database helper functions and query builders
- Use transactions for multi-step updates or writes
- Keep database access limited to server-side code
- Use `select` or `include` to fetch only requested fields

## Avoid Patterns
- Overfetching unrelated fields in database queries
- Exposing database internals to the client
- Performing writes without validation or filtering
- Creating overly complex or denormalized models without reason
- Using unchecked query conditions that may leak data

## Example Implementations
- Prisma model for courses, lessons, and enrollments
- Typed create/update helpers with selective fields
- Optimized query for paginated course listings
- Migration script for schema updates and constraints

## Performance Considerations
- Use indexes and query optimization for high-volume reads
- Minimize N+1 query patterns with relation includes
- Keep queries lean and avoid large nested data loads
- Use batch updates and transactions when safe

## Accessibility Considerations
- Database design should support accessible data models
- Keep content structure consistent for UI presentation
- Support fallback content in case of missing data

## Output Expectations
- Scalable Prisma schema and query guidance
- Secure and performant database access patterns
- Reusable database helpers and schema conventions
- Clear migration and schema evolution strategy

# References
- Prisma Docs: https://www.prisma.io/docs
- PostgreSQL Docs: https://www.postgresql.org/docs/
- TypeScript: https://www.typescriptlang.org/docs/
- MDN Database Patterns: https://developer.mozilla.org/en-US/docs/Learn/Server-side/SQL
