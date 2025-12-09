import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Spotlight from "@/components/ui/spotlight";
import CustomCursor from "@/components/ui/custom-cursor";
import Particles from "@/components/ui/particles";
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
      <body className={cn("font-sans antialiased relative", inter.variable)}>
        <div 
          className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay"
          style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
        />
        <Particles />
        <Spotlight />
        <main className="relative z-10">
          {children}
        </main>
        <CustomCursor />
      </body>
    </html>
  );
}

