# Animations Skill

## Purpose
Define subtle premium animation guidance for modern enterprise UI interactions.

## Responsibilities
- Use motion to support clarity and hierarchy
- Provide animation guidance for transitions, hover states, and micro-interactions
- Keep motion minimal and performance-friendly
- Use Framer Motion and CSS transitions appropriately

## Best Practices
- Use subtle fade, scale, and translate transitions
- Animate only meaningful state changes
- Prefer declarative animation APIs like Framer Motion
- Respect reduced motion preferences and accessibility settings
- Keep animation durations short and smooth

## Mandatory Standards
- Animations must remain minimal and elegant
- Avoid distracting or flashy motion
- Preserve content readability and focus
- Support both dark and light thematic states
- Prioritize performance and browser resiliency

## Preferred Patterns
- Use shared motion variants for reusable effects
- Apply motion to entrance, hover, and route transitions
- Use CSS transitions for simple state changes
- Use `whileHover` and `whileTap` sparingly for buttons
- Animate only when it improves usability

## Avoid Patterns
- Over-animating page content or layout shifts
- Using large or overly complex animation sequences
- Relying on motion as the only affordance
- Ignoring reduced motion preferences
- Animations that cause layout jank or repaint storms

## Example Implementations
- Subtle card lift and shadow change on hover
- Smooth page section fade-in on mount
- Minimal button interaction feedback animations
- Soft theme toggle transition with opacity change

## Performance Considerations
- Keep animation work on the compositor when possible
- Avoid animating layout properties like width or height unnecessarily
- Prefer opacity and transform animations for best performance
- Avoid long-running animations that impact responsiveness

## Accessibility Considerations
- Respect `prefers-reduced-motion`
- Keep motion optional and non-disorienting
- Ensure animations do not interfere with keyboard focus
- Provide clear interaction states without relying solely on motion

## Output Expectations
- Premium motion patterns that enhance UI clarity
- Reusable animation utilities and variants
- Minimal and accessible component transitions
- No performance or usability regressions from motion

# References
- Framer Motion: https://www.framer.com/docs/
- CSS Transitions: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions
- A11y Reduced Motion: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
