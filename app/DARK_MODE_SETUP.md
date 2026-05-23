# Dark Mode Setup Guide

## 🎯 What Was Fixed

The dark mode wasn't working because:
1. **Background blocking**: The white background on `body` was blocking the dark mode colors
2. **Missing `!important` flag**: CSS custom properties need force-apply on body/html elements  
3. **No proper dark mode provider**: Next.js needs `next-themes` to manage the `dark` class on the HTML element

---

## 📋 Installation Steps

### 1. Install next-themes
```bash
npm install next-themes
```

### 2. Update your `app/layout.tsx`

```tsx
import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vedicskill",
  description: "Learn AI, Data Science & Engineering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
```

**Important**: Add `suppressHydrationWarning` to the `<html>` tag. This prevents hydration mismatches when `next-themes` updates the HTML class.

### 3. Add ThemeToggle to Your Header/Navigation

```tsx
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      {/* Your logo and nav */}
      <ThemeToggle />
    </header>
  );
}
```

---

## 🔧 Key Changes Made

### globals.css Changes:
```css
/* Added !important to force apply on body */
body {
  background: var(--background) !important;
  color: var(--foreground) !important;
}

/* Ensure html and body fill viewport */
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
```

### page.tsx Changes:
```tsx
/* Wrapped entire page in a div with background */
<div className="w-full bg-white dark:bg-[#0F0F0F] transition-colors duration-300">
  {/* All sections here */}
</div>
```

---

## ✅ How It Works Now

1. **User clicks ThemeToggle** → Calls `setTheme('dark')` or `setTheme('light')`
2. **next-themes updates HTML class** → Adds/removes `dark` class on `<html>`
3. **CSS variables switch** → `:root.dark` variables activate
4. **Styles update** → All `dark:` Tailwind classes apply
5. **Background changes** → Body background smoothly transitions

---

## 🎨 CSS Variables Reference

### Light Mode (default)
- `--background`: `#FFFFFF` (white)
- `--foreground`: `#121212` (dark text)
- `--highlight`: `#064E3B` (teal)

### Dark Mode
- `--background`: `#0F0F0F` (dark)
- `--foreground`: `#FFFFFF` (light text)
- `--highlight`: `#10B981` (green)

---

## 🐛 Troubleshooting

### Dark mode still not working?

1. **Check next-themes is installed**:
   ```bash
   npm list next-themes
   ```

2. **Verify Providers wrapper in layout.tsx**:
   - Must wrap `{children}`
   - Must have `attribute="class"`

3. **Check HTML has `suppressHydrationWarning`**:
   ```tsx
   <html lang="en" suppressHydrationWarning>
   ```

4. **Clear browser cache**:
   - Dev: Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
   - Prod: Clear browser storage

5. **Check localStorage**:
   - Open DevTools → Application → LocalStorage
   - Look for key `theme` 
   - Value should be `dark` or `light`

---

## 🚀 Optional Enhancements

### Add System Preference Detection
Already included! When user hasn't set a preference, it uses `prefers-color-scheme`:

```tsx
<ThemeProvider 
  attribute="class" 
  defaultTheme="system"  // ← Uses system preference
  enableSystem          // ← Enable system detection
  storageKey="theme"    // ← Save to localStorage
>
```

### Persist User Preference
Users' theme choice is automatically saved to `localStorage.theme` and persists across sessions.

---

## 📦 Files You Need

1. **globals.css** - Updated with `!important` flags
2. **page.tsx** - Wrapped with proper background classes
3. **providers.tsx** - Next-themes provider wrapper
4. **theme-toggle.tsx** - Toggle button component
5. **app/layout.tsx** - Updated with Providers wrapper (you need to update this)

---

## 🎯 Testing

To verify dark mode works:

1. Click the theme toggle button
2. Check DevTools → Elements → HTML element
3. Should see `class="dark"` appear/disappear
4. Background should smoothly transition
5. Refresh page - theme should persist

Done! ✨
