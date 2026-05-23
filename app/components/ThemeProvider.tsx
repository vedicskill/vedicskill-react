'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider 
      attribute="class"
      defaultTheme="system"
      enableSystem
      enableColorScheme={true}
      storageKey="vedicskill-theme"
      forcedTheme={undefined}
      disableTransitionOnChange={false}
      themes={['light', 'dark']}
    >
      {children}
    </NextThemesProvider>
  );
}
