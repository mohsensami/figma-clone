import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        default: 'Website',
        template: '%s | Website',
    },
    description: 'description Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                // className={inter.className}
                className="flex flex-col justify-between min-h-screen"
            >
                <Navbar />
                <div className="container ">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
