import type { Metadata } from "next";
import ToastProvider from "@/components/toaster/ToastProvider";
import Header from "@/components/header/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Supabase auth",
  description: "supabase auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-200 h-screen">
        <ToastProvider>
          <Header />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
