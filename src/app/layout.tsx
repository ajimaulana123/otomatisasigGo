import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'OtomasiGo | Solusi AI & Otomatisasi Bisnis di Indonesia',
  description:
    'Tingkatkan efisiensi bisnis Anda dengan OtomasiGo. Kami menyediakan layanan otomatisasi alur kerja n8n, chatbot AI (WhatsApp & Telegram), hingga manajemen konten.',
  keywords: "otomatisasi bisnis, solusi AI, n8n, chatbot whatsapp, chatbot telegram, otomatisasi indonesia, efisiensi bisnis",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="font-body antialiased bg-background text-foreground">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
