import { Bot, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    const whatsappUrl = `https://wa.me/6285175434869?text=${encodeURIComponent(`Halo OtomasiGo, saya tertarik dengan layanan Anda.

Saya ingin berkonsultasi mengenai layanan: (Mohon pilih salah satu)
1. Otomatisasi Alur Kerja n8n
2. Chatbot WhatsApp & Telegram
3. Otomatisasi Konten Medsos
4. Otomatisasi Artikel & Blog
5. Otomatisasi Spreadsheet
6. Otomatisasi Google Drive
7. Otomatisasi Email Marketing
8. Solusi AI Kustom

Terima kasih.`)}`;

  return (
    <footer className="w-full border-t bg-gray-100/80 dark:bg-gray-900/80 pt-16 pb-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 md:px-6">
        <div className="space-y-4 col-span-1 lg:col-span-1">
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
            <Bot className="h-8 w-8 text-primary" />
            <span className="font-headline">OtomasiGo</span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs">
            Solusi otomatisasi cerdas untuk meningkatkan efisiensi dan produktivitas bisnis Anda di era digital.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5"/>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5"/>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5"/>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5"/>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-base text-foreground">Navigasi</h4>
          <nav className="grid gap-2 text-sm">
             <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
             <Link href="/#layanan" className="text-muted-foreground hover:text-primary transition-colors">Layanan</Link>
             <Link href={whatsappUrl} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">Kontak</Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-base text-foreground">Legal</h4>
          <nav className="grid gap-2 text-sm">
             <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Kebijakan Privasi</Link>
             <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Syarat & Ketentuan</Link>
          </nav>
        </div>
      </div>
       <div className="border-t mt-12">
         <div className="container mx-auto py-6 px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
                &copy; {new Date().getFullYear()} OtomasiGo. Semua hak dilindungi undang-undang.
            </p>
         </div>
       </div>
    </footer>
  );
}
