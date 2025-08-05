import { Bot, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-12 px-4 md:px-6">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Bot className="h-7 w-7 text-primary" />
            <span className="font-headline">OtomasiGo</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Solusi otomatisasi cerdas untuk meningkatkan efisiensi dan produktivitas bisnis Anda.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5"/>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5"/>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5"/>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5"/>
            </Link>
        </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground">Layanan</h4>
          <nav className="grid gap-2 text-sm">
             <Link href="#layanan" className="text-muted-foreground hover:text-primary">Otomatisasi n8n</Link>
             <Link href="#layanan" className="text-muted-foreground hover:text-primary">Chatbot WhatsApp</Link>
             <Link href="/content-generator" className="text-muted-foreground hover:text-primary">Generator Konten AI</Link>
             <Link href="#layanan" className="text-muted-foreground hover:text-primary">Manajemen Data</Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-foreground">Perusahaan</h4>
          <nav className="grid gap-2 text-sm">
             <Link href="#" className="text-muted-foreground hover:text-primary">Tentang Kami</Link>
             <Link href="#" className="text-muted-foreground hover:text-primary">Kontak</Link>
             <Link href="#" className="text-muted-foreground hover:text-primary">Kebijakan Privasi</Link>
             <Link href="#" className="text-muted-foreground hover:text-primary">Syarat & Ketentuan</Link>
          </nav>
        </div>
        <div className="space-y-4">
           <h4 className="font-semibold text-foreground">Berlangganan Newsletter</h4>
           <p className="text-sm text-muted-foreground">Dapatkan tips dan update terbaru seputar otomatisasi langsung di email Anda.</p>
            <div className="flex gap-2">
                <Input placeholder="Email Anda" className="bg-white"/>
                <Button className="bg-primary hover:bg-primary/90">Daftar</Button>
            </div>
        </div>
      </div>
       <div className="border-t bg-card">
         <div className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-center">
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} OtomasiGo. Semua hak dilindungi undang-undang.
            </p>
         </div>
       </div>
    </footer>
  );
}
