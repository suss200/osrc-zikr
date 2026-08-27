import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";

import "./globals.css";

import Loading from "./loader";
import { ThemeProvider } from "@/components/ThemeProvider";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
    variable: "--font-ibm-plex-arabic",
    subsets: ["arabic"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "OSRC Zikr",
    description: "مشروع عربي مفتوح المصدر للأذكار اليومية",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="ar"
            dir="rtl"
            suppressHydrationWarning
            className={`${ibmPlexSansArabic.variable} h-full scroll-smooth antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <ThemeProvider>
                    <Loading />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}