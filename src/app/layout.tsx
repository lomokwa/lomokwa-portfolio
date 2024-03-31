import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/crt-overlay.scss"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lorenzo Mokwa | Software Engineer",
  description: "Lorenzo Mokwa - Full Stack Developer",
  icons: {
      icon: "/assets/meta/favicon.ico",
    },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-950 crt" style={{scrollBehavior:'smooth'}}>
      <body className={`${inter.className} `}>{children}</body>
    </html>
  );
}
