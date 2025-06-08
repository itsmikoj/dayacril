import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/layout/Header"

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Dayacril",
  description: "servicio de corte laser",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body> */}
      <body className="antialiased">
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
