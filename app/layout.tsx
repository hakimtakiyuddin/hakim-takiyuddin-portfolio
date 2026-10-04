import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const title = "Hakim Takiyuddin — Software Engineer";
const description =
  "Backend engineer building payment and anti-fraud systems in Malaysia.";

export const metadata: Metadata = {
  metadataBase: new URL("https://hakimtakiyuddin.com"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Hakim Takiyuddin",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={mono.variable}>
      <body>{children}</body>
    </html>
  );
}
