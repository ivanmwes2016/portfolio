import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";

const geistSans = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-titillium-web",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ivan Mwesigwa's portflio",
  description: "I am a passionate software engineer.",
};

export default function RootLayout({
  children,
  title,
}: Readonly<{
  children: React.ReactNode;
  title: string;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
