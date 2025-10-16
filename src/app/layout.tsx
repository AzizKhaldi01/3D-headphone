import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleAnalytics gaId="G-832B96X9BN" />
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
