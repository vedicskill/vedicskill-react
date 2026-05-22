# Testing Skill

## Purpose
Provide guidance for robust testing across UI, accessibility, responsiveness, dark mode, and edge cases.

## Responsibilities
- Define unit and integration testing standards
- Validate accessibility and keyboard navigation
- Verify responsive layouts across viewport sizes
- Confirm dark/light theme behavior and persistence
- Test error handling and edge case states

## Best Practices
- Use component-level tests for logic and rendering
- Use integration tests for user flows and form behavior
- Use accessibility testing libraries for ARIA and contrast
- Automate responsive snapshots or viewport tests
- Keep tests deterministic and isolated

## Mandatory Standards
- Test critical UI components and flows
- Validate accessibility and keyboard interactions
- Check theme switching and persisted preferences
- Cover form validation and error messaging
- Avoid flaky tests or overly broad assertions

## Preferred Patterns
- Use Vitest or Jest for unit and integration tests
- Use React Testing Library for component interactions
- Use Playwright for end-to-end or responsive behavior tests
- Use Axe or accessibility plugins for audits
- Keep test data simple and realistic

## Avoid Patterns
- Testing implementation details instead of behavior
- Using brittle selectors in UI tests
- Skipping accessibility or responsive checks
- Overloading a single test with too many assertions
- Relying on network requests in unit tests

## Example Implementations
- Form field validation test with input errors and submission
- Component render test verifying dark mode classes
- Responsive navigation test across mobile and desktop widths
- Accessibility audit script for focus and label verification

## Performance Considerations
- Keep test suites fast and targeted
- Mock network calls for unit tests
- Use test-specific fixtures for repeatable results
- Run accessibility checks in CI for coverage

## Accessibility Considerations
- Test focus states and keyboard interactions explicitly
- Verify screen reader labels and ARIA roles
- Validate contrasts for both themes
- Ensure hidden elements remain accessible when appropriate

## Output Expectations
- Reliable and maintainable test suites
- Coverage for core UI patterns and edge cases
- Automated validation for accessibility and responsiveness
- Clear guidance for adding new tests to the repo

# References
- Vitest: https://vitest.dev
- React Testing Library: https://testing-library.com/docs/react-testing-library/intro
- Playwright: https://playwright.dev
- Jest: https://jestjs.io
- W3C Accessibility: https://www.w3.org/WAI/
