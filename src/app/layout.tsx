import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GPU4AI - Affordable GPU Computing for AI Developers",
  description: "Access A100, H100, and RTX 4090 GPUs at 50%+ lower cost. Simple API, pay-as-you-go.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
