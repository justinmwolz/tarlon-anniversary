import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Happy 1 Year, Tarlon | Rho",
  description:
    "Celebrating Tarlon Khoubyari's 1-year anniversary at Rho. SF's community builder.",
  openGraph: {
    title: "Happy 1 Year, Tarlon!",
    description:
      "Celebrating Tarlon Khoubyari — Rho's Events & Community Manager who built SF's startup community from scratch.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${caveat.variable} antialiased`}>{children}</body>
    </html>
  );
}
