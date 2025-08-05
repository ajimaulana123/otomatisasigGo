import { Bot } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-card">
      <div className="container mx-auto py-6 px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
           <Bot className="h-5 w-5 text-primary" />
           <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} OtomasiGo. Semua hak dilindungi undang-undang.
          </p>
        </div>
        <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Kebijakan Privasi
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Syarat & Ketentuan
            </Link>
        </div>
      </div>
    </footer>
  );
}
