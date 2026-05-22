# Accessibility Skill

## Purpose
Provide accessible design and implementation guidance to meet WCAG AA standards for all UI work in this repository.

## Responsibilities
- Enforce semantic HTML and accessible component structure
- Promote keyboard navigation and focus management
- Define ARIA usage and screen reader support
- Verify contrast, labels, and interaction accessibility
- Provide accessibility checklists and anti-patterns

## Best Practices
- Use proper HTML elements for buttons, lists, forms, and navigation
- Include visible focus indicators and skip links if needed
- Provide `aria-label`, `aria-describedby`, and `aria-hidden` where appropriate
- Ensure all interactive elements are reachable by keyboard
- Use descriptive alt text for images and icons

## Mandatory Standards
- WCAG AA compliance for contrast and keyboard access
- Semantic HTML for layout and content organization
- Accessible names for buttons, links, and form controls
- Screen reader-friendly interactions and notifications
- Proper use of labels, fieldsets, and legends in forms

## Preferred Patterns
- Accessible button and link components with focus and hover states
- Form fields paired with labels and inline validation messages
- Use landmark regions like `main`, `header`, `nav`, and `footer`
- Manage focus on route changes and modal dialog open/close
- Use accessible table markup only for tabular data

## Avoid Patterns
- Using `div` or `span` for interactive controls without role
- Hiding content visually without proper screen reader handling
- Keyboard traps or missing focus states
- Low contrast text or iconography in either theme
- Overusing ARIA when native semantics suffice

## Example Implementations
- Accessible navigation menu with skip link and focus ring
- Labelled form field group with inline error messaging
- Theme toggle button with ARIA attributes
- Accessible modal or drawer with focus trapping

## Performance Considerations
- Accessibility attributes have negligible cost and high value
- Avoid heavy JavaScript for simple accessible interactions
- Use native browser behavior where possible for performance

## Accessibility Considerations
- This skill is entirely focused on accessibility quality
- Ensure all components are usable without a mouse
- Validate with screen readers and keyboard testing
- Consider reduced motion preferences and contrast needs

## Output Expectations
- Accessible UI components and semantics
- Clear focus management and labels
- WCAG AA-friendly contrast and navigation
- Reliable keyboard and screen reader behavior

# References
- W3C WCAG: https://www.w3.org/WAI/standards-guidelines/wcag/
- MDN Accessibility: https://developer.mozilla.org/en-US/docs/Web/Accessibility
- Next.js Accessibility: https://nextjs.org/docs/advanced-features/accessibility
- React Accessibility: https://react.dev/learn/accessibility
- Tailwind Accessibility: https://tailwindcss.com/docs/accessibility
