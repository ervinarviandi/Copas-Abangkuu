import type { Metadata } from "next";
import { ThemeProvider } from "@/components/atoms/theme-provider";
import { Inter } from "next/font/google";
// import { Toaster } from "@/components/ui/toaster"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Copas Abangkuu 🔥",
  description: "Copas Abangkuu App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider  
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>

        {children}
        </ThemeProvider>
        <Toaster />
        </body>
    </html>
  );
}
