# Vedicskill Premium UI/UX Design System

A comprehensive design system for enterprise-grade, accessible, and responsive web interfaces.

## Overview

This design system provides a complete foundation for building premium, modern, and accessible web applications. It includes:
- **Consistent color palette** with full dark/light mode support
- **Comprehensive typography** system with semantic heading hierarchy
- **Reusable components** for buttons, cards, containers
- **Accessibility-first** approach with WCAG compliance
- **Responsive design** with mobile-first strategy
- **Utility classes** for rapid development

---

## Color System

### Primary Colors
- **Primary Text**: `#121212` (Light) / `#FFFFFF` (Dark)
- **Background**: `#FFFFFF` (Light) / `#0F0F0F` (Dark)
- **Accent/Highlight**: `#064E3B` (Light) / `#10B981` (Dark)

### Secondary Colors
- **Secondary Text**: `#666666` (Light) / `#A0A0A0` (Dark)
- **Muted Text**: `#999999` (Light) / `#707070` (Dark)
- **Surface**: `#F5F5F5` (Light) / `#1A1A1A` (Dark)
- **Border**: `#E8E8E8` (Light) / `#2A2A2A` (Dark)

### Semantic Colors
- **Success**: `#10B981`
- **Warning**: `#F59E0B`
- **Error**: `#EF4444`
- **Info**: `#3B82F6`

---

## Typography

### Font Family
- **Primary**: IBM Plex Sans (400, 500, 600, 700)
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

### Type Scale

#### Display
- **Display XL**: `.display-xl` - 6xl md:7xl, bold, tight tracking
- **Display LG**: `.display-lg` - 5xl md:6xl, bold, tight tracking
- **Display MD**: `.display-md` - 4xl md:5xl, bold, tight tracking

#### Headings
- **Heading LG**: `.heading-lg` - 3xl, bold, tight tracking
- **Heading MD**: `.heading-md` - 2xl, bold, tight tracking
- **Heading SM**: `.heading-sm` - xl, bold, tight tracking
- **Heading XS**: `.heading-xs` - lg, semibold, tight tracking

#### Body
- **Body LG**: `.body-lg` - lg, normal, relaxed leading
- **Body Base**: `.body-base` - base, normal, relaxed leading
- **Body SM**: `.body-sm` - sm, normal, relaxed leading
- **Body XS**: `.body-xs` - xs, normal, relaxed leading

#### Labels
- **Label**: `.label` - xs, uppercase, wide tracking, semibold
- **Label MD**: `.label-md` - sm, uppercase, wider tracking, semibold

---

## Components

### Button Component

**Variants**: primary, secondary, outline, ghost

```tsx
import Button from '@/app/components/Button';

// Primary button
<Button variant="primary" size="md">
  Click me
</Button>

// With icon
<Button variant="primary">
  Explore →
</Button>

// Loading state
<Button isLoading>
  Processing...
</Button>

// Full width
<Button fullWidth>
  Submit
</Button>
```

**Classes**
- `.btn-primary` - Main CTA button
- `.btn-secondary` - Secondary actions
- `.btn-outline` - Outline style
- `.btn-ghost` - Ghost/text button
- `.btn-sm` `.btn-md` `.btn-lg` - Size variants

### Card Component

```tsx
import Card from '@/app/components/Card';

// Basic card
<Card>
  <h3>Title</h3>
  <p>Content</p>
</Card>

// Clickable card
<Card clickable as="article">
  <h3>Clickable Card</h3>
</Card>

// Without hover effect
<Card hover={false}>
  Static content
</Card>
```

**Classes**
- `.card` - Standard card
- `.card-interactive` - Hover effects enabled

### Container Component

```tsx
import Container from '@/app/components/Container';

// Default (max-w-7xl)
<Container>
  <h1>Content</h1>
</Container>

// Custom max-width
<Container maxWidth="lg">
  Narrower content
</Container>

// Custom padding
<Container padding="loose">
  More padding
</Container>

// Semantic HTML
<Container as="section">
  <h2>Section</h2>
</Container>
```

**Props**
- `maxWidth`: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
- `padding`: 'tight' | 'normal' | 'loose'
- `as`: 'div' | 'section' | 'article' | 'main'

---

## Spacing

### Consistent Spacing Scale
- Use Tailwind's default spacing (0.25rem increments)
- Preferred units: 4px, 6px, 8px, 12px, 16px, 24px, 32px, 48px, 64px

### Section Spacing Classes
- `.py-section-sm` - py-12 md:py-16 (small sections)
- `.py-section-md` - py-16 md:py-24 (medium sections)
- `.py-section-lg` - py-24 md:py-32 (large sections)
- `.py-section-xl` - py-32 md:py-40 (extra large sections)

### Gap Utilities
- `.gap-section-sm` - gap-4 md:gap-6
- `.gap-section-md` - gap-6 md:gap-8
- `.gap-section-lg` - gap-8 md:gap-12

---

## Responsive Design

### Breakpoints
- **Mobile**: Default (< 640px)
- **Small**: `sm` (640px)
- **Medium**: `md` (768px)
- **Large**: `lg` (1024px)
- **Extra Large**: `xl` (1280px)
- **2XL**: `2xl` (1536px)

### Mobile-First Strategy
1. Design for mobile first
2. Use `md:`, `lg:`, `xl:` prefixes for larger screens
3. Test at: 320px, 640px, 768px, 1024px, 1280px, 1536px

---

## Accessibility Features

### Focus States
All interactive elements include visible focus states:

```css
.focus-ring {
  @apply focus-visible:outline-none focus-visible:ring-2 
    focus-visible:ring-[#064E3B] dark:focus-visible:ring-[#10B981] 
    focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0F0F0F];
}
```

### Keyboard Navigation
- Tab through interactive elements
- Enter/Space to activate
- Escape to close modals/menus
- Arrow keys for navigation where applicable

### ARIA Labels
- Use `aria-label` on icon-only buttons
- Use `aria-expanded` for disclosure widgets
- Use `aria-labelledby` and `aria-describedby` for associations
- Use semantic HTML (`<button>`, `<nav>`, `<article>`, `<section>`)

### Screen Reader Support
- Proper heading hierarchy (h1, h2, h3, etc.)
- Descriptive link text (avoid "click here")
- Form labels associated with inputs
- ARIA landmarks for page regions

### Reduced Motion
Respects `prefers-reduced-motion` media query:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    @apply !transition-none !animate-none;
  }
}
```

---

## Dark/Light Mode

### Implementation
Uses `next-themes` with system preference detection:

```tsx
import { ThemeToggle } from '@/app/components/ThemeToggle';

// In your layout
<ThemeProvider>
  <ThemeToggle />
  {children}
</ThemeProvider>
```

### CSS Variables
Light and dark colors are defined as CSS custom properties:

```css
:root {
  --background: #FFFFFF;
  --foreground: #121212;
  --highlight: #064E3B;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0F0F0F;
    --foreground: #FFFFFF;
    --highlight: #10B981;
  }
}
```

### Usage
```html
<div class="bg-white dark:bg-[#0F0F0F]">
  Light background in light mode, dark in dark mode
</div>
```

---

## Grid Systems

### Responsive Grids
- `.grid-auto` - Auto 3-column grid (1 col mobile, 2 md, 3 lg)
- `.grid-2` - 2-column grid (1 col mobile, 2 md)
- `.grid-3` - 3-column grid (1 col mobile, 2 md, 3 lg)
- `.grid-4` - 4-column grid (1 col mobile, 2 md, 4 lg)

### Usage
```html
<div class="grid-3">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</div>
```

---

## Best Practices

### 1. Semantic HTML
```tsx
// ✓ Good - Semantic structure
<section>
  <h2>Featured Items</h2>
  <article className="card">
    <h3>Item Title</h3>
  </article>
</section>

// ✗ Avoid - Non-semantic
<div>
  <div>Featured Items</div>
  <div className="card">
    <div>Item Title</div>
  </div>
</div>
```

### 2. Color Contrast
- Minimum 4.5:1 for text on background
- Minimum 3:1 for graphics and UI components
- Use system theme colors, not arbitrary values

### 3. Spacing
- Use consistent spacing scale
- Avoid arbitrary margin/padding values
- Group related elements with smaller gaps
- Separate sections with larger gaps

### 4. Typography
- Use semantic classes (`.heading-md`, `.body-lg`)
- Maintain proper heading hierarchy
- Never skip heading levels
- Use max-width on body text (< 800px)

### 5. Interactive Elements
- Provide visible focus indicators
- Include hover and active states
- Show loading states for async actions
- Disable buttons during submission

### 6. Forms
```tsx
// Label properly associated
<label htmlFor="email">Email</label>
<input id="email" type="email" required />

// With error message
<input
  aria-invalid={hasError}
  aria-describedby={hasError ? 'error' : undefined}
/>
{hasError && <span id="error">Error message</span>}
```

### 7. Icons
- Include `aria-hidden="true"` for decorative icons
- Use `aria-label` for icon-only buttons
```tsx
<button aria-label="Close menu">
  <IconClose aria-hidden="true" />
</button>
```

---

## Common Patterns

### Hero Section
```tsx
<section className="px-6 md:px-8 py-32 md:py-40">
  <Container>
    <h1 className="display-lg">Headline</h1>
    <p className="body-lg text-secondary">Description</p>
    <div className="flex gap-4 mt-8">
      <Button>Primary CTA</Button>
      <Button variant="outline">Secondary CTA</Button>
    </div>
  </Container>
</section>
```

### Feature Grid
```tsx
<section className="py-section-lg bg-surface">
  <Container>
    <h2 className="heading-lg mb-16">Features</h2>
    <div className="grid-3">
      {items.map(item => (
        <Card key={item.id}>
          <h3 className="heading-sm">{item.title}</h3>
          <p className="body-sm text-secondary">{item.description}</p>
        </Card>
      ))}
    </div>
  </Container>
</section>
```

### CTA Section
```tsx
<section className="py-section-xl bg-white dark:bg-[#0F0F0F]">
  <Container maxWidth="lg" className="text-center">
    <h2 className="display-md">Get Started</h2>
    <p className="body-lg text-secondary mt-6">Description</p>
    <div className="flex gap-4 justify-center mt-12">
      <Button>Start Now</Button>
      <Button variant="outline">Learn More</Button>
    </div>
  </Container>
</section>
```

---

## File Structure

```
app/
├── components/
│   ├── Button.tsx           # Button component
│   ├── Card.tsx             # Card component
│   ├── Container.tsx        # Container component
│   ├── Navbar.tsx           # Navigation
│   ├── Footer.tsx           # Footer
│   ├── ThemeProvider.tsx    # Theme provider
│   └── ThemeToggle.tsx      # Theme toggle
├── globals.css              # Global styles and utilities
├── layout.tsx               # Root layout
└── page.tsx                 # Home page
```

---

## Performance Considerations

### Images
- Use Next.js `<Image>` component
- Provide proper `width` and `height`
- Use `priority` for above-fold images
- Lazy load below-fold images

### CSS
- Use Tailwind utility classes
- Avoid inline styles
- Leverage CSS custom properties for theming
- Use CSS cascade for media queries

### JavaScript
- Code split components with dynamic imports
- Use server components where possible
- Minimize client-side bundle size
- Implement proper loading states

---

## Maintenance & Updates

### Adding New Components
1. Create component file in `/app/components/`
2. Use TypeScript with proper interfaces
3. Include JSDoc comments
4. Export default component
5. Document in this guide

### Updating Global Styles
1. Modify `/app/globals.css`
2. Update color variables in :root
3. Test in both light and dark modes
4. Update this documentation

### Testing
- Test responsive behavior (320px, 768px, 1200px+)
- Test keyboard navigation
- Test screen reader with NVDA/JAWS
- Test in Chrome, Firefox, Safari, Edge
- Test dark mode switching

---

## Resources

- **Tailwind CSS**: https://tailwindcss.com
- **Next.js**: https://nextjs.org
- **WCAG 2.1**: https://www.w3.org/WAI/WCAG21/quickref/
- **Web Accessibility**: https://webaccessibility.withgoogle.com
- **IBM Plex Sans**: https://github.com/IBM/plex

---

**Last Updated**: May 2026  
**Version**: 1.0.0
