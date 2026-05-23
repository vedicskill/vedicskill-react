# VedicSkill Premium Style Guide

## Color System

### Primary Colors
- **Primary Text**: #121212 (Dark)
- **Background**: #FFFFFF (Light) / #0F0F0F (Dark)
- **Accent/Button**: #064E3B (Light) / #10B981 (Dark)

### Secondary Colors
- **Secondary Text**: #666666 (Light) / #A0A0A0 (Dark)
- **Muted Text**: #999999 (Light) / #707070 (Dark)
- **Surface**: #F5F5F5 (Light) / #1A1A1A (Dark)
- **Border**: #E8E8E8 (Light) / #2A2A2A (Dark)

### Semantic Colors
- **Success**: #10B981
- **Warning**: #F59E0B
- **Error**: #EF4444
- **Info**: #3B82F6

## Typography

### Font Family
- **Primary**: IBM Plex Sans (400, 500, 600, 700)
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

### Heading Scale
```
Display XL: 6xl md:7xl font-bold tracking-tight
Display LG: 5xl md:6xl font-bold tracking-tight
Display MD: 4xl md:5xl font-bold tracking-tight

Heading LG: 3xl font-bold tracking-tight
Heading MD: 2xl font-bold tracking-tight
Heading SM: xl font-bold tracking-tight

Body LG: lg font-normal leading-relaxed
Body Base: base font-normal leading-relaxed
Body SM: sm font-normal leading-relaxed

Label: xs uppercase tracking-widest font-semibold
```

## Spacing

### Consistent Spacing Scale
- Use Tailwind's default spacing (0.25rem increments)
- Preferred spacing units: 4px, 6px, 8px, 12px, 16px, 24px, 32px, 48px, 64px

### Padding Guidelines
- Small components: px-4 py-2.5 or px-3 py-2
- Medium components: px-6 py-3 or px-6 py-3.5
- Large sections: px-6 md:px-8 py-16 or py-24

### Margins
- Section spacing: mb-6, mb-12, mb-16 (for headings)
- Element spacing: gap-2, gap-3, gap-4, gap-6

## Components

### Buttons
**Primary Button**
- Classes: `.btn-primary`
- Background: #064E3B (Light) / #10B981 (Dark)
- Padding: px-6 py-3
- Rounded: rounded-2xl
- States: hover (darker shade), active (scale-95)

**Secondary Button**
- Classes: `.btn-secondary`
- Background: #F5F5F5 (Light) / #1A1A1A (Dark)
- Border: 1px #E8E8E8 (Light) / #2A2A2A (Dark)
- States: hover (slightly darker background)

**Outline Button**
- Classes: `.btn-outline`
- Border: 2px #064E3B (Light) / #10B981 (Dark)
- States: hover (filled background)

### Cards
- Classes: `.card`
- Background: white dark:bg-[#1A1A1A]
- Border: 1px #E8E8E8 dark:border-[#2A2A2A]
- Radius: rounded-2xl
- Padding: p-6
- Shadow: shadow-sm hover:shadow-md
- Transitions: duration-300

### Section Headers
- Classes: `.section-header`
- Size: text-4xl md:text-5xl font-bold
- Spacing: mb-6

**With Accent Line**
- Classes: `.section-accent`
- Height: h-1
- Width: w-16
- Color: bg-[#064E3B] dark:bg-[#10B981]
- Radius: rounded-full

### Navigation
- Sticky positioning with glass morphism effect
- Transparent background with backdrop blur
- Border bottom for separation
- Link hover states with underline animation

## Dark Mode

### Implementation
- Uses `next-themes` for theme persistence
- Theme toggle component available in navbar
- Respects system preference by default
- Smooth transitions between themes

### Dark Mode Classes
- Use Tailwind's `dark:` prefix
- Example: `bg-white dark:bg-[#0F0F0F]`

## Layout

### Container Widths
- Max width: max-w-7xl (1280px) for main content
- Content max width: max-w-4xl for text-heavy pages
- Padding: px-6 on mobile, md:px-8 on larger screens

### Responsive Breakpoints
- Mobile: default
- Tablet: md (768px)
- Desktop: lg (1024px), xl (1280px)

## Accessibility

### Focus States
All interactive elements have visible focus states:
```
outline-none ring-2 ring-[#064E3B] ring-offset-2
dark:ring-offset-[#0F0F0F]
```

### Keyboard Navigation
- All buttons and links are keyboard accessible
- Tab order follows visual hierarchy
- Focus indicators are clear and visible

### Contrast
- All text meets WCAG AA contrast requirements
- Dark mode maintains readable contrast ratios

## Transitions & Animations

### Standard Durations
- Fast: duration-200 (for hover states)
- Normal: duration-300 (for interactions)
- Slow: duration-500 (for larger movements)

### Easing
- Default: ease-in-out
- Links: transition-colors
- Buttons: transition-all (for scale, color, shadow)

## Typography Guidelines

### Heading Hierarchy
1. Use semantic HTML (h1, h2, h3, etc.)
2. Only one h1 per page
3. Follow visual hierarchy with size and weight
4. Use `tracking-tight` for headings
5. Use `leading-relaxed` for body text

### Text Hierarchy
- Use color variations for hierarchy
- Primary text: #121212 (light) / white (dark)
- Secondary text: #666666 (light) / #A0A0A0 (dark)
- Muted text: #999999 (light) / #707070 (dark)

## Premium Design Principles

1. **Minimalism**: Remove unnecessary visual clutter
2. **Consistency**: Use the same patterns throughout
3. **Spacing**: Use whitespace effectively
4. **Typography**: Readable and clear hierarchy
5. **Color**: Limited, purposeful palette
6. **Interactions**: Smooth, meaningful transitions
7. **Accessibility**: Inclusive design for all users
8. **Responsive**: Works on all screen sizes

## Component Library Usage

### Import Examples
```typescript
// Using button utilities
<button className="btn-primary">Primary Button</button>
<button className="btn-secondary">Secondary Button</button>
<button className="btn-outline">Outline Button</button>

// Using card utility
<div className="card">Card content</div>

// Using typography
<h2 className="display-md">Page Title</h2>
<p className="body-lg">Body text</p>
```

## Implementation Checklist

- [ ] Dark mode toggle implemented
- [ ] All pages use consistent colors
- [ ] Proper heading hierarchy on all pages
- [ ] Responsive design verified
- [ ] Focus states implemented
- [ ] Transitions smooth and consistent
- [ ] Accessibility standards met
- [ ] Build succeeds without errors
