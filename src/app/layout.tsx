import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Supaase auth",
  description: "supaase auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-200 h-screen">{children}</body>
    </html>
  );
}
