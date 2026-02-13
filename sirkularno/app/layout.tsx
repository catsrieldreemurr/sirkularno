import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";

const PTSans = PT_Sans({
  subsets: ["latin"],
  weight: '400'
});

export const metadata: Metadata = {
  title: "Sirkulær NO",
  description: "Lær om Sirkeløkonomi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={PTSans.className}
      >
        {children}
      </body>
    </html>
  );
}
