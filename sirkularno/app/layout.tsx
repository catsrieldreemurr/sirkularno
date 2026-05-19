import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";

const PTSans = PT_Sans({
  subsets: ["latin"],
  weight: '400'
});

export const metadata: Metadata = {
  title: "Nordic Devices",
  description: "Norskt IT Selskap",
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
