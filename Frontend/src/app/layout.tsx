/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";
import { GlobalContextProvider } from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Vercel Clone",
    description: "Deploy your app in few minutes",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "bg-white text-black dark:bg-black dark:text-white",
                    inter.className
                )}
            >
                <GlobalContextProvider>
                    <Providers>{children}</Providers>
                </GlobalContextProvider>
                <Toaster />
            </body>
        </html>
    );
}
