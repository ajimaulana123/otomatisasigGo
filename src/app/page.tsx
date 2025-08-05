import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Bot,
  FileText,
  Folder,
  Mail,
  MessagesSquare,
  Repeat,
  Share2,
  Table2,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: <Repeat className="h-8 w-8 text-primary" />,
    title: 'Otomatisasi Alur Kerja n8n',
    description: 'Rancang dan implementasikan alur kerja otomatis yang kompleks untuk menghemat waktu dan sumber daya Anda.',
  },
  {
    icon: <MessagesSquare className="h-8 w-8 text-primary" />,
    title: 'Chatbot WhatsApp & Telegram',
    description: 'Bangun chatbot cerdas untuk berinteraksi dengan pelanggan Anda secara real-time di platform populer.',
  },
  {
    icon: <Share2 className="h-8 w-8 text-primary" />,
    title: 'Otomatisasi Konten Medsos',
    description: 'Jadwalkan dan publikasikan konten secara otomatis ke berbagai platform media sosial Anda.',
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: 'Otomatisasi Artikel & Blog',
    description: 'Gunakan AI untuk membantu membuat draf artikel dan postingan blog berkualitas tinggi dengan cepat.',
  },
  {
    icon: <Table2 className="h-8 w-8 text-primary" />,
    title: 'Otomatisasi Spreadsheet',
    description: 'Kelola data di Google Sheets atau Excel secara otomatis, dari entri data hingga pembuatan laporan.',
  },
  {
    icon: <Folder className="h-8 w-8 text-primary" />,
    title: 'Otomatisasi Google Drive',
    description: 'Otomatiskan pengelolaan file dan folder di Google Drive, termasuk pengorganisasian dan pencadangan.',
  },
  {
    icon: <Mail className="h-8 w-8 text-primary" />,
    title: 'Otomatisasi Email Marketing',
    description: 'Kirim kampanye email, personalisasi pesan, dan kelola daftar pelanggan Anda secara efisien.',
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: 'Generator Konten AI',
    description: 'Buat konten media sosial dan draf artikel secara instan dengan bantuan asisten AI kami.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full bg-card py-20 md:py-32">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center px-4 md:px-6">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">
              Otomatiskan Bisnis Anda dengan{' '}
              <span className="text-primary">OtomasiGo</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Kami menyediakan solusi otomatisasi canggih untuk meningkatkan efisiensi dan produktivitas bisnis Anda di Indonesia. Dari chatbot hingga manajemen data, kami siap membantu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#layanan">Lihat Layanan Kami</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/content-generator">Coba Generator AI</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Automation Illustration"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl"
              data-ai-hint="automation abstract"
            />
          </div>
        </div>
      </section>

      <section id="layanan" className="w-full py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              Layanan Unggulan Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Solusi lengkap untuk semua kebutuhan otomatisasi bisnis Anda, dirancang untuk pasar Indonesia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col text-center items-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  {service.icon}
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-primary/10 py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Siap Mengubah Bisnis Anda?
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan temukan bagaimana OtomasiGo dapat membantu bisnis Anda tumbuh lebih cepat.
          </p>
          <Button size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
            Hubungi Kami
          </Button>
        </div>
      </section>
    </div>
  );
}
