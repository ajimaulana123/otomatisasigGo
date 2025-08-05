import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Goal, Lightbulb, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
  {
    name: "Ahmad Susanto",
    role: "Founder & CEO",
    avatar: "https://placehold.co/100x100.png",
    hint: "man portrait"
  },
  {
    name: "Budi Hartono",
    role: "Lead Automation Engineer",
    avatar: "https://placehold.co/100x100.png",
    hint: "man glasses"
  },
  {
    name: "Citra Lestari",
    role: "AI Specialist",
    avatar: "https://placehold.co/100x100.png",
    hint: "woman professional"
  },
   {
    name: "Dewi Anggraini",
    role: "Project Manager",
    avatar: "https://placehold.co/100x100.png",
    hint: "woman smiling"
  },
]

export default function AboutPage() {
  return (
    <div className="bg-gray-50/50">
      <section className="w-full py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
             <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Tentang Kami
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tighter text-gray-900">
              Misi Kami adalah Memberdayakan Bisnis Melalui <span className="text-primary">Otomasi</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              OtomasiGo lahir dari keyakinan bahwa setiap bisnis, besar maupun kecil, berhak mendapatkan akses ke teknologi canggih untuk bertumbuh. Kami berdedikasi untuk menyediakan solusi otomatisasi dan AI yang praktis, efisien, dan berdampak nyata bagi produktivitas klien kami di seluruh Indonesia.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
         <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                    <Image
                        src="https://placehold.co/600x450.png"
                        width={600}
                        height={450}
                        alt="Team discussing automation strategies"
                        className="rounded-xl shadow-lg w-full"
                        data-ai-hint="team business"
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-6 font-headline">Kisah di Balik OtomasiGo</h2>
                    <p className="text-muted-foreground mb-4">
                        Didirikan pada tahun 2023, OtomasiGo dimulai dengan ide sederhana: bagaimana jika kita bisa menghilangkan tugas-tugas repetitif yang membosankan dari pekerjaan sehari-hari? Dari ide tersebut, kami berkembang menjadi tim yang terdiri dari para ahli teknologi, strategi, dan AI yang bersemangat untuk memecahkan masalah.
                    </p>
                    <p className="text-muted-foreground">
                       Kami percaya bahwa dengan mengotomatiskan proses, kita tidak hanya menghemat waktu, tetapi juga membuka ruang untuk inovasi, kreativitas, dan pertumbuhan strategis. Itulah semangat yang kami bawa dalam setiap proyek yang kami kerjakan.
                    </p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              Nilai-Nilai Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Prinsip yang menjadi pemandu kami dalam bekerja dan melayani Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-4 rounded-full bg-primary/10 inline-block mb-4">
                    <Lightbulb className="h-8 w-8 text-primary"/>
                </div>
                <h3 className="text-xl font-bold mb-2">Inovasi</h3>
                <p className="text-muted-foreground">Kami selalu mencari cara baru dan lebih baik untuk memecahkan masalah dan memberikan nilai lebih.</p>
            </Card>
             <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-4 rounded-full bg-primary/10 inline-block mb-4">
                    <Users className="h-8 w-8 text-primary"/>
                </div>
                <h3 className="text-xl font-bold mb-2">Kemitraan</h3>
                <p className="text-muted-foreground">Kami melihat klien kami sebagai mitra. Kesuksesan Anda adalah kesuksesan kami.</p>
            </Card>
             <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-4 rounded-full bg-primary/10 inline-block mb-4">
                    <Goal className="h-8 w-8 text-primary"/>
                </div>
                <h3 className="text-xl font-bold mb-2">Integritas</h3>
                <p className="text-muted-foreground">Kami berkomitmen pada transparansi, kejujuran, dan memberikan hasil yang berkualitas.</p>
            </Card>
          </div>
        </div>
      </section>
      
       <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">
              Temui Tim Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Para profesional di balik kesuksesan solusi otomatisasi Anda.
            </p>
          </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="flex flex-col items-center text-center">
                    <Avatar className="w-24 h-24 mb-4 shadow-md">
                        <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.hint} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h4 className="font-bold text-lg">{member.name}</h4>
                    <p className="text-sm text-primary font-medium">{member.role}</p>
                </div>
              ))}
           </div>
        </div>
       </section>
       
        <section className="w-full bg-primary/5 py-20">
            <div className="container mx-auto px-4 md:px-6">
                <Card className="bg-white shadow-xl border-0 overflow-hidden">
                    <div className="grid md:grid-cols-2 items-center">
                        <div className="p-8 md:p-12">
                             <h2 className="text-3xl font-bold font-headline text-gray-900 mb-4">
                                Mari Berkolaborasi!
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Apakah Anda siap untuk membawa bisnis Anda ke level selanjutnya? Jadwalkan konsultasi gratis dengan tim kami untuk mendiskusikan bagaimana otomatisasi dapat membantu Anda mencapai tujuan.
                            </p>
                            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                                <Link href="#">Hubungi Kami Sekarang</Link>
                            </Button>
                        </div>
                        <div className="hidden md:block h-full">
                             <Image
                                src="https://placehold.co/600x400.png"
                                width={600}
                                height={400}
                                alt="Collaboration"
                                className="object-cover w-full h-full"
                                data-ai-hint="office collaboration"
                            />
                        </div>
                    </div>
                </Card>
            </div>
      </section>

    </div>
  )
}
