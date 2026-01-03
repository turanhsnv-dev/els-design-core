// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Elza Design | UX/UI & Motion", // Burayı da güncelledim :)
  description: "Senior Product Designer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased`}>
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            success: {
              duration: 3000,
              style: {
                background: "rgba(11, 12, 21, 0.95)",
                color: "#fff",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(12px)",
                borderRadius: "12px",
                padding: "16px 24px",
                minWidth: "320px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
              },
              iconTheme: {
                primary: "#10b981",
                secondary: "rgba(11, 12, 21, 0.95)",
              },
            },
          }}
        />
      </body>
    </html>
  );
}