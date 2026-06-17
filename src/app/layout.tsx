import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Providers from "@/components/shared/Providers";
import "./globals.css";   

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Els Design | UX/UI & Motion",
  description: "Senior UX/UI & Motion Designer portfolio — Elza Xudiyeva. Crafting digital experiences that blend functionality with cinematic storytelling.",
  icons: {
    icon: [
      { url: "/logo/image.png", type: "image/png" },
    ],
    apple: "/logo/image.png",
    shortcut: "/logo/image.png",
  },
  openGraph: {
    title: "Els Design | UX/UI & Motion",
    description: "Senior UX/UI & Motion Designer portfolio — Elza Xudiyeva.",
    images: [{ url: "/logo/image.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Els Design | UX/UI & Motion",
    images: ["/logo/image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${manrope.variable} font-sans antialiased`}>
        <Providers>
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
        </Providers>
      </body>
    </html>
  );
}