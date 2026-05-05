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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Wolf's Fabrications Gym — Calisthenics Built To Outlast You",
    template: "%s · Wolf's Fabrications Gym",
  },
  description:
    "A prefabricated, weld-built calisthenics rig for your backyard. Pull-ups, dips, muscle-ups, levers — engineered to last decades, ships ready to install.",
  openGraph: {
    title: "Wolf's Fabrications Gym",
    description:
      "Prefabricated calisthenics rig. Built once. Trains forever.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
