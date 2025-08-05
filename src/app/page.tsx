import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  Bot,
  FileText,
  Folder,
  Mail,
  MessagesSquare,
  Repeat,
  Share2,
  Table2,
  ThumbsUp,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: <Repeat className="h-10 w-10 text-primary" />,
    title: 'Otomatisasi Alur Kerja n8n',
    description: 'Rancang dan implementasikan alur kerja otomatis yang kompleks untuk menghemat waktu dan sumber daya Anda.',
  },
  {
    icon: <MessagesSquare className="h-10 w-10 text-primary" />,
    title: 'Chatbot WhatsApp & Telegram',
    description: 'Bangun chatbot cerdas untuk berinteraksi dengan pelanggan Anda secara real-time di platform populer.',
  },
  {
    icon: <Share2 className="h-10 w-10 text-primary" />,
    title: 'Otomatisasi Konten Medsos',
    description: 'Jadwalkan dan publikasikan konten secara otomatis ke berbagai platform media sosial Anda.',
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: 'Otomatisasi Artikel & Blog',
    description: 'Gunakan AI untuk membantu membuat draf artikel dan postingan blog berkualitas tinggi dengan cepat.',
  },
  {
    icon: <Table2 className="h-10 w-10 text-primary" />,
    title: 'Otomatisasi Spreadsheet',
    description: 'Kelola data di Google Sheets atau Excel secara otomatis, dari entri data hingga pembuatan laporan.',
  },
  {
    icon: <Folder className="h-10 w-10 text-primary" />,
    title: 'Otomatisasi Google Drive',
    description: 'Otomatiskan pengelolaan file dan folder di Google Drive, termasuk pengorganisasian dan pencadangan.',
  },
  {
    icon: <Mail className="h-10 w-10 text-primary" />,
    title: 'Otomatisasi Email Marketing',
    description: 'Kirim kampanye email, personalisasi pesan, dan kelola daftar pelanggan Anda secara efisien.',
  },
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: 'Generator Konten AI',
    description: 'Buat konten media sosial dan draf artikel secara instan dengan bantuan asisten AI kami.',
  },
];

const howItWorks = [
    {
        step: 1,
        title: "Konsultasi",
        description: "Kami akan menganalisis kebutuhan bisnis Anda untuk merancang solusi otomatisasi yang paling efektif."
    },
    {
        step: 2,
        title: "Implementasi",
        description: "Tim ahli kami akan membangun dan mengintegrasikan sistem otomatisasi sesuai dengan rencana."
    },
    {
        step: 3,
        title: "Dukungan",
        description: "Kami menyediakan dukungan berkelanjutan untuk memastikan sistem Anda berjalan lancar dan optimal."
    }
]

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-gray-50/20">
      <section className="w-full bg-white py-24 md:py-32">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4 md:px-6">
          <div className="space-y-6">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold">
              Solusi Otomatisasi Cerdas
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline tracking-tighter">
              Tingkatkan Efisiensi Bisnis Anda dengan <span className="text-primary">OtomasiGo</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Kami menyediakan solusi otomatisasi canggih untuk meningkatkan efisiensi dan produktivitas bisnis Anda di Indonesia. Dari chatbot hingga manajemen data, kami siap membantu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold shadow-lg">
                <Link href="#layanan">Mulai Sekarang <ArrowRight className="ml-2 h-5 w-5"/></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base font-semibold">
                <Link href="/content-generator">Coba Generator AI</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/600x600.png"
              alt="Automation Illustration"
              width={600}
              height={600}
              className="rounded-2xl shadow-2xl aspect-square object-cover"
              data-ai-hint="automation abstract"
            />
          </div>
        </div>
      </section>

      <section id="layanan" className="w-full py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              Layanan Unggulan Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Solusi lengkap untuk semua kebutuhan otomatisasi bisnis Anda, dirancang untuk pasar Indonesia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col text-left p-6 bg-white hover:shadow-xl transition-shadow duration-300 rounded-xl border border-gray-200/80">
                <CardHeader className="p-0 mb-4">
                  {service.icon}
                </CardHeader>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardContent className="p-0">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

       <section id="how-it-works" className="w-full py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              Bagaimana Kami Bekerja
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Kami membuat proses otomatisasi menjadi sederhana dan transparan untuk Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
             <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 hidden md:block" />
             <div className="absolute top-1/2 left-0 w-full h-1 bg-primary hidden md:block" style={{width: "66%"}}/>
            {howItWorks.map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center z-10">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white text-2xl font-bold border-4 border-white shadow-md">
                    {item.step}
                </div>
                <h3 className="text-2xl font-bold mt-6 mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="testimonial" className="w-full py-20 md:py-28">
         <div className="container mx-auto px-4 md:px-6">
             <div className="grid md:grid-cols-5 gap-12 items-center">
                <div className="md:col-span-2">
                    <Image
                        src="https://placehold.co/400x500.png"
                        alt="Happy Customer"
                        width={400}
                        height={500}
                        className="rounded-2xl shadow-xl object-cover w-full h-full"
                        data-ai-hint="professional portrait"
                    />
                </div>
                 <div className="md:col-span-3">
                    <div className="bg-primary/10 text-primary inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6">
                        <ThumbsUp className="h-5 w-5"/>
                        <span className="font-semibold">Klien Kami Berbicara</span>
                    </div>
                     <blockquote className="text-2xl md:text-3xl font-light italic text-gray-800">
                         “OtomasiGo telah mengubah cara kami beroperasi. Proses yang tadinya memakan waktu berjam-jam kini selesai dalam hitungan menit. Sungguh luar biasa!”
                     </blockquote>
                     <p className="mt-6 font-bold text-lg text-gray-900">Andi Wijaya</p>
                     <p className="text-muted-foreground">CEO, Maju Jaya Group</p>
                 </div>
             </div>
         </div>
      </section>

      <section className="w-full bg-primary/95 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">
            Siap Mengubah Bisnis Anda?
          </h2>
          <p className="text-lg text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan temukan bagaimana OtomasiGo dapat membantu bisnis Anda tumbuh lebih cepat.
          </p>
          <Button size="lg" className="mt-8 bg-white hover:bg-gray-100 text-primary font-bold shadow-lg">
            Hubungi Kami
          </Button>
        </div>
      </section>
    </div>
  );
}
