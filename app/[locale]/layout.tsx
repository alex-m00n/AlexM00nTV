import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/theme/ThemeProvider";
import clsx from "clsx";
import { Header } from "@/src/features/layout/Header";
import { Footer } from "@/src/features/layout/Footer";
import { Providers } from "./providers";
import { SpeedInsights } from "@vercel/speed-insights/next"

const ibm = IBM_Plex_Mono({ weight: "500", subsets: ["latin"] });

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params:{
    locale: string;
  }
}>) {
  return (
    <html className="h-auto w-auto">
      <head>
        <link rel="shortcut icon" href="/animated.jpg" type="image/x-jpg" />
        <meta name="description" content="Just AlexM00n's Website" />
      </head>

      <body className={clsx(ibm.className, "bg-background overflow-x-hidden")}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <Providers locale={params.locale}/>
          
          <div className="flex flex-col">
            <Header/>
            <div className="flex-1 m-auto pt-16">
              {children}
              <SpeedInsights />
            </div>
          </div>

        </ThemeProvider>
        <Footer />
      </body>

    </html>
  );
}
