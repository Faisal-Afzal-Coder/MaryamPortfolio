import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maryam Afzal | Professional Online Biology & Chemistry Tutor",
  description: "Experienced online tutor specializing in Biology and Chemistry for O-Level, A-Level, IGCSE, and GCSE. Empowering students globally with conceptual clarity and academic excellence.",
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
    "Interactive Science Learning"
  ],
  authors: [{ name: "Maryam Afzal" }],
  openGraph: {
    title: "Maryam Afzal | Professional Online Biology & Chemistry Tutor",
    description: "Personalized online tutoring for O/A-Levels, IGCSE, and GCSE Biology & Chemistry. Helping students build strong conceptual foundations and achieve top grades.",
    type: "website",
    locale: "en_US",
  },
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
