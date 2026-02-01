import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IRISI - Luxury Fashion",
  description:
    "Discover timeless elegance at IRISI. Shop premium fashion essentials crafted with exceptional quality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">{children}</body>
    </html>
  );
}
