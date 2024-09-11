"use client";
import { Madimi_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/Utils/BackToTop";
import ReactLenis from "lenis/react";

const madimi = Madimi_One({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`   ${madimi.className} antialiased  `}>
        {" "}
        <ReactLenis root>
          <Header /> {children} <Footer />
          <BackToTop />
        </ReactLenis>
      </body>
    </html>
  );
}
