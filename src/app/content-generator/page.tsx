import ContentGeneratorForm from '@/components/content-generator-form';

export default function ContentGeneratorPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 md:px-6">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          Generator Konten AI
        </h1>
        <p className="text-lg text-muted-foreground">
          Buat konten media sosial dan draf artikel secara instan. Cukup berikan topik atau ide, dan biarkan AI kami yang bekerja.
        </p>
      </div>
      <ContentGeneratorForm />
    </div>
  );
}
