import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Woooden Stories | Handcrafted Wooden Companions",
  description: "Experience the magic of handcrafted wooden figures. Sustainable, eco-friendly, and designed to inspire your workspace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} font-outfit antialiased selection:bg-accent-coral/20 selection:text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
