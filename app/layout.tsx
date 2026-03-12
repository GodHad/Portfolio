import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Patrik Lacko | Full-Stack Developer for React, fabric.js, AI, and Web3",
  description:
    "Premium portfolio of Patrik Lacko, focused on React, fabric.js, Laravel, AI integrations, automation, and Web3 product development.",
  keywords: [
    "Patrik Lacko",
    "React developer",
    "fabric.js developer",
    "AI automation developer",
    "Web3 developer",
    "Laravel developer",
    "full-stack engineer",
  ],
  openGraph: {
    title: "Patrik Lacko | Full-Stack Developer for React, fabric.js, AI, and Web3",
    description:
      "Premium portfolio built to showcase React, fabric.js, Laravel, AI integrations, automation, and Web3 product work.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patrik Lacko | Full-Stack Developer for React, fabric.js, AI, and Web3",
    description:
      "Premium portfolio built to showcase React, fabric.js, Laravel, AI integrations, automation, and Web3 product work.",
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
