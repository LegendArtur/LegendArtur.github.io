import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artur Gubaidullin - Dev",
  description:
    "Artur Gubaidullin developer portfolio and blog. Next-gen 10X Developer. Full-stack developer, JavaScript, TypeScript, React, Node.js, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className="dark">
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <body className={inter.className + " relative "}>{children}</body>
      </html>
  );
}
