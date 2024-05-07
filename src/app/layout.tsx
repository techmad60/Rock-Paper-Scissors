import type { Metadata } from "next";

import "./globals.css"


export const metadata: Metadata = {
  title: "Techmad's Rock Paper Scissors Game",
  description: "Built with love by Techmad",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body>{children}</body>
    </html>
  )
}