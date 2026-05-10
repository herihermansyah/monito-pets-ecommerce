import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import SiteLayout from "./layouts/site-layout";

const poppinsFonts = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "monito-pets-ecommerce",
  description: "monito-pets-ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppinsFonts.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
