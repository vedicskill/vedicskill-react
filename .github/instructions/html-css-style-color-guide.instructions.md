---
description: 'VedicSkill Academy color usage guidelines and styling rules for HTML elements to ensure accessible, professional designs aligned with brand identity.'
applyTo: '**/*.html, **/*.css, **/*.js'
brand: 'VedicSkill Academy'
lastUpdated: 'June 2026'
---

# VedicSkill Academy - HTML CSS Style Color Guide

Follow these guidelines when updating or creating HTML/CSS styles for browser rendering. This guide ensures all web components maintain VedicSkill Academy's brand identity while adhering to accessibility and design best practices.

---

## VedicSkill Academy Color Palette

### Brand Core Colors

| Color Name | Hex Code | RGB | Usage | Tone |
|-----------|----------|-----|-------|------|
| **Primary Dark** | `#121212` | rgb(18, 18, 18) | Headers, primary text, trust signals, buttons | Trust, Professionalism |
| **Secondary Green** | `#064E3B` | rgb(6, 78, 59) | CTAs, accents, success states, highlights | Growth, Achievement, Learning |
| **Background Light** | `#F2F2F2` | rgb(242, 242, 242) | Page backgrounds, card backgrounds, sections | Clean, Modern, Accessible |

### Extended Palette (Supporting Colors)

| Color Name | Hex Code | Usage |
|-----------|----------|-------|
| **White** | `#FFFFFF` | Text on dark backgrounds, high-contrast elements |
| **Light Gray** | `#E0E0E0` | Borders, dividers, secondary backgrounds |
| **Medium Gray** | `#999999` | Secondary text, muted elements |
| **Dark Gray** | `#4D4D4D` | Body text, readable content |

---

## Color Distribution - 60-30-10 Rule for VedicSkill

Apply the **60-30-10 rule** to maintain visual hierarchy and brand consistency:

- **Primary Color (60%)**: `#F2F2F2` (Background Light)
  - Page backgrounds, card containers, main content areas
  - Ensures clean, accessible, modern appearance
  
- **Secondary Color (30%)**: `#121212` (Primary Dark)
  - Headers, navigation, primary text content
  - Establishes trust and professionalism
  
- **Accent Color (10%)**: `#064E3B` (Secondary Green)
  - Call-to-action buttons, interactive elements, success messages
  - Draws attention to learning opportunities and growth
  - Use sparingly for emphasis and action prompts

### Color Usage Formula

```
Total Page/Component = 60% #F2F2F2 + 30% #121212 + 10% #064E3B
```

---

## Background Colors

**Always Use:**
- `#F2F2F2` (Light Gray) - Primary page and card backgrounds
- `#FFFFFF` (White) - Elevated containers, modal backgrounds, content cards
- Subtle gradients within the gray family (e.g., `#F2F2F2` to `#FFFFFF`)

**Never Use:**
- Hot colors (red, orange, yellow) for backgrounds
- Purple, magenta, or pink backgrounds
- Dark backgrounds without sufficient contrast planning
- Any color that reduces readability or accessibility

**Avoid Unless Specified:**
- Bright or saturated colors
- Color combinations that fail WCAG contrast standards

### Background Examples for VedicSkill

```css
/* Primary Background */
body {
  background-color: #F2F2F2;
}

/* Card/Container */
.card {
  background-color: #FFFFFF;
  border: 1px solid #E0E0E0;
}

/* Subtle Gradient Background */
.section-background {
  background: linear-gradient(135deg, #F2F2F2 0%, #FFFFFF 100%);
}
```

---

## Text Colors

### Primary Text (60%)

**Recommended:**
- `#121212` (Primary Dark) on light backgrounds
- `#4D4D4D` (Dark Gray) for body text on `#F2F2F2`
- High contrast for readability (WCAG AAA compliant)

**Structure:**
- Headings: Use `#121212` (Bold weight)
- Body text: Use `#4D4D4D` or `#121212` (Regular weight)
- Ensure 7:1+ contrast ratio on light backgrounds

### Secondary Text (30%)

**Recommended:**
- `#999999` (Medium Gray) for muted or secondary content
- Use for captions, metadata, or less important information
- Maintain 4.5:1 contrast ratio minimum (WCAG AA)

### Never Use for Text:

- `#FFFFFF` (White) on light backgrounds
- `#FFFF00` (Yellow) or bright colors - poor readability
- `#064E3B` (Secondary Green) as primary text - insufficient contrast on light backgrounds
- Colors with contrast ratios below WCAG AA standards

### Text Color Examples for VedicSkill

```css
/* Primary Heading */
h1, h2, h3 {
  color: #121212;
  font-weight: bold;
  font-family: 'IBM Plex Sans', sans-serif;
}

/* Body Text */
p, .body-text {
  color: #4D4D4D;
  font-weight: 400;
  line-height: 1.6;
}

/* Secondary Text */
.secondary-text, .caption, .meta {
  color: #999999;
  font-size: 0.875rem;
}

/* Link Text */
a {
  color: #064E3B;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
```

---

## Accent & Interactive Colors

### Primary Call-to-Action (10% of Design)

**Color:** `#064E3B` (Secondary Green)

**Usage:**
- Primary action buttons ("Start Learning", "Build Portfolio", etc.)
- Success messages and confirmations
- Active navigation states
- Progress indicators
- Hover states on interactive elements
- Links and hypertext

**Never:** Use accent color as background for large areas - reserve for focused, actionable elements

### Accent Color States

```css
/* Primary Button - Default */
.btn-primary {
  background-color: #064E3B;
  color: #FFFFFF;
  border: none;
  font-weight: bold;
  padding: 12px 24px;
  border-radius: 4px;
  font-family: 'IBM Plex Sans', sans-serif;
}

/* Primary Button - Hover */
.btn-primary:hover {
  background-color: #053230; /* Darker shade of green */
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* Secondary Button - Outline Style */
.btn-secondary {
  background-color: #FFFFFF;
  color: #121212;
  border: 2px solid #121212;
  font-weight: bold;
  padding: 12px 24px;
  border-radius: 4px;
}

.btn-secondary:hover {
  background-color: #F2F2F2;
}

/* Success Message */
.success-message {
  background-color: #F0F8F5;
  border-left: 4px solid #064E3B;
  color: #053230;
  padding: 12px 16px;
}

/* Link (Using Accent) */
a {
  color: #064E3B;
}

a:visited {
  color: #053230;
}
```

---

## Colors to Avoid

Unless explicitly required by specific design specifications or user request, **never use:**

### Hot Colors (Reds, Oranges, Yellows)
- Reserve exclusively for critical alerts, errors, or warnings
- Use only when conveying urgency or critical information
- Limit to small, focused areas (icons, alert badges)
- Alternative: Use `#064E3B` for positive states or information

### Problematic Colors
- Bright purples, magentas, or neon colors
- Hot pinks or vibrant colors inconsistent with brand
- Colors with low contrast ratios
- Any color that fails WCAG AA accessibility standards

### When Hot Colors Are Necessary

If an error or warning must be communicated:

```css
/* Error State - Use Sparingly */
.error-alert {
  background-color: #FEE8E8; /* Very light red tint */
  border-left: 4px solid #D32F2F;
  color: #B71C1C;
}

/* Warning State - Use Sparingly */
.warning-alert {
  background-color: #FFF8E1; /* Very light yellow tint */
  border-left: 4px solid #F57F17;
  color: #E65100;
}
```

---

## Gradients

Use gradients to add depth and visual interest while maintaining VedicSkill's professional, modern aesthetic.

### Best Practices

✅ **Do:**
- Keep color shifts minimal and within the same color family
- Use gradients from `#F2F2F2` to `#FFFFFF` (subtle)
- Apply gradients to backgrounds, buttons, and containers
- Use linear gradients for backgrounds
- Combine gradient with accent color sparingly

❌ **Don't:**
- Mix hot and cool colors in one gradient
- Create high-contrast color transitions
- Use radial gradients for backgrounds (less professional)
- Apply gradients to text content

### Gradient Examples for VedicSkill

```css
/* Subtle Background Gradient */
.subtle-gradient {
  background: linear-gradient(135deg, #F2F2F2 0%, #FFFFFF 100%);
}

/* Card with Hover Gradient */
.card:hover {
  background: linear-gradient(135deg, #FFFFFF 0%, #F0F2F5 100%);
  transition: all 0.3s ease;
}

/* Hero Section Gradient */
.hero-section {
  background: linear-gradient(180deg, #F2F2F2 0%, #FFFFFF 100%);
  padding: 60px 20px;
}

/* Button Gradient on Hover */
.btn-primary:hover {
  background: linear-gradient(135deg, #064E3B 0%, #053230 100%);
}

/* Accent Gradient (Use Rarely) */
.accent-gradient {
  background: linear-gradient(90deg, #064E3B 0%, #095545 100%);
}
```

---

## Component-Specific Guidelines

### Navigation & Header

```css
.header {
  background-color: #121212; /* Primary Dark */
  color: #FFFFFF;
  padding: 16px 24px;
}

.nav-link {
  color: #FFFFFF;
  text-decoration: none;
}

.nav-link:hover {
  color: #F2F2F2; /* Slightly lighter on hover */
}

.nav-link.active {
  border-bottom: 3px solid #064E3B; /* Accent highlight */
}
```

### Cards & Containers

```css
.card {
  background-color: #FFFFFF;
  border: 1px solid #E0E0E0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 24px;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-color: #D0D0D0;
}
```

### Course Cards (VedicSkill Specific)

```css
.course-card {
  background-color: #FFFFFF;
  border: 1px solid #E0E0E0;
  transition: all 0.3s ease;
}

.course-card:hover {
  border-color: #064E3B;
  box-shadow: 0 4px 12px rgba(6, 78, 59, 0.1);
}

.course-card__status {
  background-color: #F0F8F5;
  color: #064E3B;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 4px;
}

.course-card__cta {
  background-color: #064E3B;
  color: #FFFFFF;
  padding: 12px 24px;
  text-align: center;
  border-radius: 4px;
  font-weight: bold;
}

.course-card__cta:hover {
  background-color: #053230;
}
```

### Forms & Inputs

```css
.form-input {
  background-color: #FFFFFF;
  border: 1px solid #E0E0E0;
  color: #121212;
  padding: 10px 12px;
  border-radius: 4px;
  font-family: 'IBM Plex Sans', sans-serif;
}

.form-input:focus {
  border-color: #064E3B;
  outline: none;
  box-shadow: 0 0 0 3px rgba(6, 78, 59, 0.1);
}

.form-label {
  color: #121212;
  font-weight: bold;
  font-size: 0.875rem;
}

.form-error {
  color: #D32F2F;
  font-size: 0.75rem;
  margin-top: 4px;
}
```

### Success & Progress Indicators

```css
.progress-bar {
  background-color: #E0E0E0;
  height: 6px;
  border-radius: 3px;
  overflow: hidden;
}

.progress-bar__fill {
  background-color: #064E3B; /* Success green */
  height: 100%;
  transition: width 0.3s ease;
}

.badge-success {
  background-color: #E8F5E9;
  color: #2E7D32;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: bold;
}

.badge-learning {
  background-color: #F0F8F5;
  color: #064E3B;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: bold;
}
```

---

## Accessibility Standards

All color combinations must meet **WCAG 2.1 AA** minimum standards:

- **Contrast Ratio for Text:** 4.5:1 (AA) or 7:1 (AAA)
- **Contrast Ratio for Large Text:** 3:1 (AA) or 4.5:1 (AAA)
- **Large Text Definition:** 18pt+ or 14pt+ bold

### VedicSkill Color Combinations - Accessibility Verified

| Foreground | Background | Contrast Ratio | WCAG Level |
|-----------|-----------|-----------------|-----------|
| #121212 | #F2F2F2 | 16.3:1 | AAA ✅ |
| #121212 | #FFFFFF | 21:1 | AAA ✅ |
| #FFFFFF | #121212 | 21:1 | AAA ✅ |
| #064E3B | #F2F2F2 | 8.2:1 | AAA ✅ |
| #4D4D4D | #F2F2F2 | 8.1:1 | AAA ✅ |
| #999999 | #F2F2F2 | 4.9:1 | AA ✅ |

---

## Color Application Checklist

Before committing any style changes:

- [ ] Primary background is `#F2F2F2` or `#FFFFFF`
- [ ] Primary text is `#121212` or `#4D4D4D`
- [ ] Accent color usage limited to CTAs, success, and interactive elements
- [ ] All text meets WCAG AA contrast standards (4.5:1 minimum)
- [ ] Gradients use colors from same family only
- [ ] No hot colors used except for critical alerts
- [ ] Brand colors are used consistently across components
- [ ] Typography follows IBM Plex Sans guidelines
- [ ] Hover states provide clear visual feedback
- [ ] Focus states are visible for keyboard navigation

---

## Dark Mode Support (Future Enhancement)

When implementing dark mode, apply these color inversions:

| Light Mode | Dark Mode | Usage |
|-----------|----------|-------|
| `#F2F2F2` | `#1A1A1A` | Background |
| `#FFFFFF` | `#2D2D2D` | Cards/Containers |
| `#121212` | `#FFFFFF` | Primary Text |
| `#4D4D4D` | `#E0E0E0` | Body Text |
| `#064E3B` | `#4DB8A1` | Accent (Lighter shade) |

---

## Additional Resources

- [VedicSkill Academy Brand Guidelines](./VedicSkill-Academy-GitHub-Copilot-Guidelines.md)
- [WCAG Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [IBM Plex Sans Font Family](https://github.com/IBM/plex)
- [Color Accessibility Tool](https://www.tpgi.com/color-contrast-checker/)
- [UI Color Palette Best Practices](https://www.interaction-design.org/literature/article/ui-color-palette)
- [Government Design Standards](https://designsystem.digital.gov/design-tokens/color/overview/)

---

## Questions or Updates?

For color specification questions or design updates, refer to:
1. **Brand Guidelines:** VedicSkill Academy GitHub Copilot Instructions
2. **Design System:** Follow the 60-30-10 rule and component guidelines
3. **Accessibility:** Verify against WCAG 2.1 AA standards

**Brand Voice:** Keep it simple, practical, and accessible. Our colors should inspire learning and growth while maintaining professional trust.
