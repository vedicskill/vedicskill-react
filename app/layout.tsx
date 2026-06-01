import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Providers } from "@/app/components/providers";
import "./globals.css";


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
    default: "VedicSkill Academy | AI, Data Science & Engineering Courses",
    template: "%s | VedicSkill Academy",
  },

  description:
    "VedicSkill Academy offers career-ready online courses in AI, Data Science, Machine Learning, and Engineering. Learn with project-based training, expert mentorship, and real-world outcomes.",

  keywords: [
    "AI course",
    "Data Science course",
    "Machine Learning course",
    "Engineering course",
    "online learning",
    "project-based training",
    "career-ready skills",
    "VedicSkill Academy",
  ],

  metadataBase: new URL("https://vedicskill.com"),

  // viewport: "width=device-width, initial-scale=1, maximum-scale=5",

  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",

  openGraph: {
    title: "VedicSkill Academy - Online Courses in AI, Data Science & Engineering",
    description:
      "VedicSkill Academy helps learners advance with practical online courses in AI, Data Science, Machine Learning, and Engineering. Learn by building real projects for job-ready skills.",
    url: "https://vedicskill.com",
    siteName: "VedicSkill Academy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://vedicskill.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "VedicSkill Academy - AI, Data Science & Engineering Courses",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "VedicSkill Academy - Career-Focused Online Courses",
    description:
      "Discover practical online courses in AI, Data Science, and Engineering at VedicSkill Academy. Build real projects, gain job-ready skills, and grow your career.",
    images: ["https://vedicskill.com/twitter-image.png"],
    creator: "@vedicskill",
  },

  alternates: {
    canonical: "https://vedicskill.com",
  },

  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
        <Providers>
          {/*GoogleAnalytics*/}
          <GoogleAnalytics gaId="G-CDYJXR6P96" />
          {/* Navigation */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
