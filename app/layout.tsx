import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Patrik Lacko | Senior Full-Stack Engineer for Startup Products, AI Workflows, and Interactive Web Apps",
  description:
    "Portfolio of Patrik Lacko, a senior full-stack engineer building startup products, AI workflows, advanced interactive web apps, and production-ready full-stack systems.",
  keywords: [
    "Patrik Lacko",
    "senior full-stack engineer",
    "startup product engineer",
    "fabric.js developer",
    "AI workflow engineer",
    "Web3 developer",
    "Laravel developer",
    "interactive web app developer",
  ],
  openGraph: {
    title: "Patrik Lacko | Senior Full-Stack Engineer for Startup Products, AI Workflows, and Interactive Web Apps",
    description:
      "Senior full-stack engineering for startup products, AI workflows, fabric.js experiences, and production-ready web platforms.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patrik Lacko | Senior Full-Stack Engineer for Startup Products, AI Workflows, and Interactive Web Apps",
    description:
      "Senior full-stack engineering for startup products, AI workflows, fabric.js experiences, and production-ready web platforms.",
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
