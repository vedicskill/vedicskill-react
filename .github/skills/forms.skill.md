# Forms Skill

## Purpose
Provide accessible, validated, and responsive form guidance for React-driven enterprise experiences.

## Responsibilities
- Standardize form layout and field behavior
- Enforce accessible labels, validation, and error states
- Use React Hook Form and Zod for robust form handling
- Ensure responsive form design and mobile usability

## Best Practices
- Use `react-hook-form` for form state management
- Validate with Zod schemas and provide inline error feedback
- Pair each form field with a visible label
- Use accessible form controls and helper text
- Keep forms responsive and well-spaced

## Mandatory Standards
- Use React Hook Form and Zod for form validation
- Support light/dark theme form styling
- Provide clear error messages and validation hints
- Keep form controls keyboard accessible
- Avoid hidden or unclear form labels

## Preferred Patterns
- Use reusable field components for inputs, selects, and textareas
- Handle submission states and client-side validation gracefully
- Provide contextual error messages near fields
- Use accessible error summaries for screen readers
- Keep form groups organized with fieldset/legend when needed

## Avoid Patterns
- Inline validation without accessible messaging
- Unlabeled inputs or ambiguous placeholders as labels
- Overly complex form layouts on small screens
- Ignoring focus behavior after submission or errors
- Using uncontrolled form patterns for complex validation

## Example Implementations
- Login or signup form with inline validation and a submit button
- Contact form with semantic field grouping and helper text
- Settings form with toggles and accessible labels
- Feedback form with error summary and field-level errors

## Performance Considerations
- Use lazy form fields only when needed
- Avoid re-rendering the whole form on every input change
- Keep validation schemas reusable and efficient
- Cache form options or metadata separately from field state

## Accessibility Considerations
- Ensure every field has an associated label
- Announce validation errors to assistive technologies
- Keep keyboard navigation within the form logical
- Respect reduced-motion preferences in form transitions

## Output Expectations
- Accessible, validated, and maintainable forms
- Consistent form field components and layout rules
- Responsive behavior across all viewports
- Reusable form validation and submission patterns

# References
- React Hook Form: https://react-hook-form.com
- Zod: https://zod.dev
- W3C Forms: https://www.w3.org/WAI/tutorials/forms/
- MDN Forms: https://developer.mozilla.org/en-US/docs/Learn/Forms
