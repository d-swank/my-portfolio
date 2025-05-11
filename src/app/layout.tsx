import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/common/ThemeProvider";
import { TypingProvider } from "@/components/common/Typewriter";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dakota Swank | Software Engineer",
  description:
    "Dakota Swank — a creative and dedicated software engineer building modern, user-friendly web applications with Next.js, React, and Tailwind CSS.",
  icons: {
    icon: "/favicon.png",
  },
  keywords:
    "Dakota Swank, Software Engineer, Portfolio, Next.js, React, Tailwind CSS, Web Developer",
  openGraph: {
    title: "Dakota Swank | Software Engineer",
    description:
      "Explore the portfolio of Dakota Swank, a software engineer specializing in Next.js and modern web technologies.",
    url: "https://www.swanksoftware.com/favicon.png",
    type: "website",
    images: [
      {
        url: "https://www.swanksoftware.com/favicon.png",
        width: 1200,
        height: 630,
        alt: "Dakota Swank's Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} antialiased font-mono`}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <TypingProvider>{children}</TypingProvider>
        </Providers>
      </body>
    </html>
  );
}
