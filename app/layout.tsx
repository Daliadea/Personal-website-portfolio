import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { CursorSpotlight } from "@/components/ui/cursor-spotlight";
import CustomCursor from "@/components/ui/custom-cursor";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Portfolio | Your Name",
  description: "Personal portfolio website showcasing my projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} dark`} suppressHydrationWarning>
      <body className={cn("font-sans antialiased", inter.variable)}>
        <CustomCursor />
        <CursorSpotlight />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}

