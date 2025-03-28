import type { Metadata } from "next";
import { Poppins ,Volkhov } from "next/font/google";
import "./globals.css";

const fontPoppins = Poppins ({
  subsets:['latin'],
  variable: "--font-popins",
  weight: ["100", "300", "400", "600", "700","800", "900"]
});
const fontVolkhov = Volkhov ({
  subsets:['latin'],
  variable: "--font-volkhov",
  weight: [ "400", "700"]
});

export const metadata: Metadata = {
  title: "Jadoo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontPoppins.variable} ${fontVolkhov.variable}`}>
        {children}
      </body>
    </html>
  );
}
