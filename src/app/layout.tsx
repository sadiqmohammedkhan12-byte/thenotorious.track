import type { Metadata } from "next";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "NotoriousTrack | Discipline Today. Freedom Tomorrow.",
  description: "Elite productivity and habit tracking for high performers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full dark antialiased">
      <body className="min-h-full flex flex-col bg-brand-black text-slate-50 selection:bg-brand-blue/30">
        {children}
        <Toaster position="bottom-right" theme="dark" closeButton />
      </body>
    </html>
  );
}
