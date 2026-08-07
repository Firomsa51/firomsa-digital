import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Firomsa Digital | Digital Marketing Specialist",
  description:
    "Firomsa Digital provides digital marketing services focused on Meta Ads, audience targeting, lead generation and social media marketing.",
  openGraph: {
    title: "Firomsa Digital | Digital Marketing Specialist",
    description:
      "Helping businesses grow online through strategic Meta advertising, audience targeting and social media marketing.",
    type: "website",
    locale: "en_US",
    siteName: "Firomsa Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Firomsa Digital | Digital Marketing Specialist",
    description: "Helping Businesses Grow Online.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
