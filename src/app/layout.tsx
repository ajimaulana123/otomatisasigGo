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
  keywords: [
    'otomatisasi bisnis',
    'solusi AI',
    'n8n',
    'chatbot whatsapp',
    'chatbot telegram',
    'otomatisasi indonesia',
    'efisiensi bisnis',
  ],
  robots: 'index, follow',
  authors: [{ name: 'OtomasiGo Team', url: 'https://otomasigo.vercel.app' }],
  creator: 'OtomasiGo',
  publisher: 'OtomasiGo',
  openGraph: {
    title: 'OtomasiGo | Solusi AI & Otomatisasi Bisnis di Indonesia',
    description:
      'Layanan otomatisasi bisnis seperti n8n, chatbot AI, WhatsApp bot, dan lainnya.',
    url: 'https://otomasigo.vercel.app',
    siteName: 'OtomasiGo',
    images: [
      {
        url: '/bot.avif', // pastikan file ada di /public
        width: 1200,
        height: 630,
        alt: 'OtomasiGo AI & Automasi',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  icons: {
    icon: '/bot.avif',
    shortcut: '/bot.avif',
    apple: '/bot.avif', // opsional
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OtomasiGo | Solusi AI & Otomatisasi Bisnis',
    description:
      'Tingkatkan efisiensi bisnis Anda dengan layanan otomatisasi dari OtomasiGo.',
    images: ['/bot.avif'],
  },
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
