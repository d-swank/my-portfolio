import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Dakota Swank | Software Engineer",
  description:
    "Dakota Swank — a creative and dedicated software engineer building modern, user-friendly web applications with Next.js, React, and Tailwind CSS.",
  keywords:
    "Dakota Swank, Software Engineer, Portfolio, Next.js, React, Tailwind CSS, Web Developer",
  openGraph: {
    title: "Dakota Swank | Software Engineer",
    description:
      "Explore the portfolio of Dakota Swank, a software engineer specializing in Next.js and modern web technologies.",
    url: "https://swanksoftware.com", // Replace with your real portfolio URL
    type: "website",
    images: [
      {
        url: "https://swanksoftware.com/DS-Logo.sng",
        width: 1200,
        height: 630,
        alt: "Dakota Swank's Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
