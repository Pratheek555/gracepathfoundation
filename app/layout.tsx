import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gracepath Development Foundation | Empowering lives, enriching communities",
  description: "Gracepath Development Foundation partners with underserved communities across education, health, livelihoods, environment, and community development.",
  icons: {
    icon: "/gracepath/logo-transparent.png",
    apple: "/gracepath/logo-transparent.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
