"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Bot, Menu } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#layanan', label: 'Layanan' },
  { href: '/#how-it-works', label: 'Cara Kerja' },
];

const whatsappMessage = `Halo OtomasiGo, saya tertarik untuk berkonsultasi mengenai layanan Anda.`;
const whatsappUrl = `https://wa.me/6285175434869?text=${encodeURIComponent(whatsappMessage)}`;

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks
        .map(link => {
            const id = link.href.split('#')[1];
            if (!id) return null;
            const section = document.getElementById(id);
            return section ? { id, section } : null;
        })
        .filter(Boolean);
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentActive = '/';

      if (pathname === '/') {
          for (const item of sections) {
              if (item && item.section.offsetTop <= scrollPosition) {
                  currentActive = `/#${item.id}`;
              }
          }

          // Check if at the top of the page
          if (window.scrollY < 100) {
              currentActive = '/';
          }
      } else {
          currentActive = pathname;
      }


      setActiveLink(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for sticky header
          behavior: 'smooth',
        });
      }
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Bot className="h-6 w-6 text-primary" />
          <span className="font-headline">OtomasiGo</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                activeLink === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href={whatsappUrl} target="_blank">Hubungi Kami</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Buka menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
               <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
              </SheetHeader>
              <div className="grid gap-6 p-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-lg" onClick={() => setIsOpen(false)}>
                  <Bot className="h-6 w-6 text-primary" />
                  <span className="font-headline">OtomasiGo</span>
                </Link>
                <nav className="grid gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "text-base font-medium transition-colors hover:text-primary",
                         activeLink === link.href ? "text-primary" : "text-muted-foreground"
                      )}
                      onClick={(e) => handleLinkClick(e, link.href)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => setIsOpen(false)}>
                   <Link href={whatsappUrl} target="_blank">Hubungi Kami</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
