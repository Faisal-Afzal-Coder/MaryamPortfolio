import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maryamportfolio1234.vercel.app"),
  title: {
    default: "Maryam Afzal | Online Biology & Chemistry Tutor",
    template: "%s | Maryam Afzal",
  },
  description:
    "Experienced online tutor specializing in Biology and Chemistry for O-Level, A-Level, IGCSE, and GCSE students worldwide. Concept-focused lessons and exam readiness.",
  keywords: [
    "Maryam Afzal",
    "Biology Tutor",
    "Chemistry Tutor",
    "Online Tutor",
    "O-Level Tutor",
    "A-Level Tutor",
    "IGCSE Biology",
    "GCSE Chemistry",
    "Biotechnology Tutor",
    "Online Science Classes",
    "UVAS Pakistan",
    "Interactive Science Learning",
  ],
  authors: [{ name: "Maryam Afzal", url: "https://maryamportfolio1234.vercel.app" }],
  creator: "Maryam Afzal",
  publisher: "Maryam Afzal",
  applicationName: "Maryam Afzal Portfolio",
  category: "education",
  verification: {
    google: "3fnm-6ed3l_9A43XxsFFIqlrLxcfG-rbBtcsA8PPFe8",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maryamportfolio1234.vercel.app",
    siteName: "Maryam Afzal Portfolio",
    title: "Maryam Afzal | Online Biology & Chemistry Tutor",
    description:
      "Personalized online tutoring for O/A-Levels, IGCSE, and GCSE Biology & Chemistry, helping students build strong conceptual foundations and achieve excellent grades.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Maryam Afzal online biology and chemistry tutor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maryam Afzal | Online Biology & Chemistry Tutor",
    description:
      "Concept-based online tutoring for biology and chemistry with a strong focus on exam success and student confidence.",
    images: ["/og-image.svg"],
    creator: "@maryamafzal",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07111F" },
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  document.documentElement.classList.add('dark');
                } catch (_) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">{children}</div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
