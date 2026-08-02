import type { Metadata } from "next";
import { Montserrat, Roboto,Manrope } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trust Wear",
  description: "Premium Clothing Brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
