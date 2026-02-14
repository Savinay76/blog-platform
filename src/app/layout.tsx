import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/Container';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Next.js Blog Platform',
    description: 'A static blog platform built with Next.js and MDX',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-testid="html-root">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
                data-testid="body-root"
            >
                <Header />
                <main className="flex-grow py-8" data-testid="main-content">
                    <Container>
                        {children}
                    </Container>
                </main>
                <Footer />
                <GoogleAnalytics gaId="G-XYZ1234567" />
            </body>
        </html>
    );
}
