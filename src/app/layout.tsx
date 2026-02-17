import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";


const cairo = Cairo({
  variable: "--font-cairo",
  weight : [ '200' , '300' , '400' , '500' , '600' , '700' , '800' , '900' , '1000'],
});

export const metadata: Metadata = {
  title: "Mohamed Abdelaziem",
  description: "Portfolio Of Mohamed Abdelaziem",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>){





  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="../../public/images/logo.webp"
          type="image/x-icon"
        />
      </head>
      <body className={`${cairo.variable} md:overflow-[none] overflow-x-hidden antialiased bg-white dark:bg-main`}>
        {children}
      </body>

    </html>
  );
}
