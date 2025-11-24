import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type React from "react"; // Import React

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Huzaifa Ali Khan – Software Engineer & Full Stack Developer",
  description:
    "Portfolio of Huzaifa Ali Khan, showcasing web development projects, skills, and professional experience.",
  keywords: [
    "Huzaifa Ali Khan",
    "Full Stack Developer",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Huzaifa Ali Khan" }],
  generator: "Next.js",
  applicationName: "Huzaifa Ali Khan Portfolio",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Huzaifa Ali Khan – Software Engineer",
    description: "Full Stack Developer portfolio of Huzaifa Ali Khan.",
    url: "https://www.huzaifali.tech",
    siteName: "Huzaifa Ali Khan Portfolio",
    type: "website",
    images: [
      {
        url: "https://www.huzaifali.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "Huzaifa Ali Khan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Huzaifa Ali Khan – Software Engineer",
    description:
      "Portfolio showcasing projects and skills of Huzaifa Ali Khan.",
    images: ["https://www.huzaifali.tech/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Schema />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import Schema from "./components/schema";
