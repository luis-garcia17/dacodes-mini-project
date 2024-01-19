import type { Metadata } from "next";
import { Poppins } from "@next/font/google";
import "./globals.scss";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: "Dacodes mini project",
  description: "Take home challenge for Dacodes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
