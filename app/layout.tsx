import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/theme/ThemeProvider";
import clsx from "clsx";
import { Header } from "@/src/features/layout/Header";
import { Footer } from "@/src/features/layout/Footer";
import { Children } from "react";

const ibm = IBM_Plex_Mono({ weight: "500", subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-auto w-auto">
      <head>
        <link rel="shortcut icon" href="/animated.gif" type="image/x-gif" />
        <meta name="description" content="Just AlexM00n's Website" />
      </head>

      <body className={clsx(ibm.className, "bg-background overflow-x-hidden")}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          
          <div className="flex flex-col">
            <Header/>
            <div className="flex-1 max-w-lg m-auto py-14">
              {children}
            </div>
          </div>

        </ThemeProvider>
        <Footer />
      </body>

    </html>
  );
}
