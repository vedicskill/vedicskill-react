# Monochrome UI Instructions

## Core Instruction

Refactor the UI into a strict monochrome system using:

- #161616
- #FFFFFF
- #E5E5E5

---

# Required Changes

## Replace All Colors
Convert:
- blue
- red
- green
- purple
- pink
- orange
- yellow

Into monochrome equivalents.

---

# Background Rules

Use:
```css
background: #FFFFFF;
```

Never use:
- gradients
- dark gradients
- animated backgrounds

---

# Typography Rules

Use:
```css
color: #161616;
```

Secondary text:
```css
opacity: 0.7;
```

---

# Border Rules

Use:
```css
border-color: #E5E5E5;
```

---

# Shadow Rules

Allowed:
```css
box-shadow: 0 1px 2px rgba(0,0,0,0.04);
```

Avoid:
- colored shadows
- glow effects

---

# Scrollbar Rules

Use minimal gray scrollbars.

Example:
```css
::-webkit-scrollbar-thumb {
  background: #E5E5E5;
}
```

---

# Component Rules

## Buttons
Dark background with white text.

## Cards
White background with subtle border.

## Inputs
White background with gray border.

---

# Preserve

- responsiveness
- layouts
- accessibility
- business logic

---

# Desired Outcome

The final interface should look:
- premium
- minimal
- monochrome
- clean
- Apple-inspired
- enterprise-ready
