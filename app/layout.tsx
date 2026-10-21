import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Royalty, then the seller',
  description: 'Basis points of a price, truncated toward zero. Not a live payout.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
