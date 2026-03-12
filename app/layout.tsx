import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Your Name | React Developer | AI Automation | Web3 Builder",
  description:
    "Modern premium portfolio for a React developer building frontend, full-stack, AI automation, and Web3 products.",
  keywords: [
    "React developer",
    "Next.js portfolio",
    "AI automation developer",
    "Web3 developer",
    "frontend engineer",
  ],
  openGraph: {
    title: "Your Name | React Developer | AI Automation | Web3 Builder",
    description:
      "Premium portfolio built for client trust, startup credibility, and modern web product work.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name | React Developer | AI Automation | Web3 Builder",
    description:
      "Premium portfolio built for client trust, startup credibility, and modern web product work.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} bg-slate-950 font-sans text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
