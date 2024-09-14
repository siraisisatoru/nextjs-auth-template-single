import type { Metadata } from "next";
import "./globals.css";
import MainNav from "@/components/MainNav";

export const metadata: Metadata = {
    title: "Auth Template",
    description:
        "Base template for nextjs projects that requires verificating for single user case.",
    icons: {
        icon: "/img/logo.svg", // /public path
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`flex flex-col min-h-screen`}>
                <MainNav />
                {children}
            </body>
        </html>
    );
}
