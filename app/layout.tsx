import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vedicskill",
    template: "%s | Vedicskill",
  },

  description:
    "Learn AI, Data Science, and Engineering with structured tutorials and real-world projects.",

  metadataBase: new URL("https://vedicskill.com"),

  openGraph: {
    title: "Vedicskill",
    description: "Structured tutorials for AI, Data Science, and Engineering.",
    url: "https://vedicskill.com",
    siteName: "Vedicskill",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vedicskill",
    description:
      "Learn AI, Data Science, and Engineering with practical tutorials.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white dark:bg-[#0F0F0F] text-[#121212] dark:text-white flex flex-col min-h-screen antialiased transition-colors duration-200`}
      >
        <ThemeProvider>
          {/*GoogleAnalytics*/}
          <GoogleAnalytics gaId="G-CDYJXR6P96" />
          {/* Navigation */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
