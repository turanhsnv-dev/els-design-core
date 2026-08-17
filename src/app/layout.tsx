import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Providers from "@/components/shared/Providers";
import { SITE } from "@/constants/site";
import { TOASTER_OPTIONS } from "@/constants/toast";
import "./globals.css";

const syne = Syne({ variable: "--font-syne", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  openGraph: {
    title: SITE.title,
    description: `Senior UX/UI & Motion Designer portfolio — Elza Xudiyeva.`,
    images: [{ url: SITE.logo }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    images: [SITE.logo],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${syne.variable} ${manrope.variable} font-sans antialiased`}
      >
        <Providers>
          {children}
          <Toaster position="top-center" toastOptions={TOASTER_OPTIONS} />
        </Providers>
      </body>
    </html>
  );
}
