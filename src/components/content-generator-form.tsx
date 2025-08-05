'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  generateSocialMediaPost,
  GenerateSocialMediaPostOutput,
} from '@/ai/flows/generate-social-media-post';
import {
  generateArticleDraft,
  GenerateArticleDraftOutput,
} from '@/ai/flows/generate-article-draft';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const socialFormSchema = z.object({
  topic: z.string().min(3, { message: 'Topik harus diisi.' }),
  platform: z.enum(['Facebook', 'Twitter', 'Instagram', 'LinkedIn']),
  tone: z.enum(['Informative', 'Funny', 'Engaging', 'Promotional']),
  keyword: z.string().optional(),
});

const articleFormSchema = z.object({
  prompt: z
    .string()
    .min(10, { message: 'Prompt harus diisi, minimal 10 karakter.' }),
});

export default function ContentGeneratorForm() {
  const { toast } = useToast();
  const [socialPost, setSocialPost] = useState<GenerateSocialMediaPostOutput | null>(null);
  const [article, setArticle] = useState<GenerateArticleDraftOutput | null>(null);
  const [isSocialLoading, setIsSocialLoading] = useState(false);
  const [isArticleLoading, setIsArticleLoading] = useState(false);

  const socialForm = useForm<z.infer<typeof socialFormSchema>>({
    resolver: zodResolver(socialFormSchema),
    defaultValues: {
      topic: '',
      platform: 'Instagram',
      tone: 'Engaging',
      keyword: '',
    },
  });

  const articleForm = useForm<z.infer<typeof articleFormSchema>>({
    resolver: zodResolver(articleFormSchema),
    defaultValues: {
      prompt: '',
    },
  });

  async function onSocialSubmit(values: z.infer<typeof socialFormSchema>) {
    setIsSocialLoading(true);
    setSocialPost(null);
    try {
      const result = await generateSocialMediaPost(values);
      setSocialPost(result);
    } catch (error) {
      toast({
        title: 'Terjadi Kesalahan',
        description: 'Gagal membuat post media sosial. Silakan coba lagi.',
        variant: 'destructive',
      });
      console.error(error);
    } finally {
      setIsSocialLoading(false);
    }
  }

  async function onArticleSubmit(values: z.infer<typeof articleFormSchema>) {
    setIsArticleLoading(true);
    setArticle(null);
    try {
      const result = await generateArticleDraft(values);
      setArticle(result);
    } catch (error) {
      toast({
        title: 'Terjadi Kesalahan',
        description: 'Gagal membuat draf artikel. Silakan coba lagi.',
        variant: 'destructive',
      });
      console.error(error);
    } finally {
      setIsArticleLoading(false);
    }
  }

  return (
    <Tabs defaultValue="social" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="social">Post Media Sosial</TabsTrigger>
        <TabsTrigger value="article">Draf Artikel</TabsTrigger>
      </TabsList>
      <TabsContent value="social">
        <Card>
          <CardHeader>
            <CardTitle>Generator Post Media Sosial</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...socialForm}>
              <form onSubmit={socialForm.handleSubmit(onSocialSubmit)} className="space-y-8">
                <FormField
                  control={socialForm.control}
                  name="topic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Topik</FormLabel>
                      <FormControl>
                        <Input placeholder="cth: Manfaat otomatisasi untuk bisnis kecil" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={socialForm.control}
                    name="platform"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Platform</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih platform" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Facebook">Facebook</SelectItem>
                            <SelectItem value="Twitter">Twitter</SelectItem>
                            <SelectItem value="Instagram">Instagram</SelectItem>
                            <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={socialForm.control}
                    name="tone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gaya Bahasa (Tone)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Pilih gaya bahasa" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Informative">Informatif</SelectItem>
                            <SelectItem value="Funny">Lucu</SelectItem>
                            <SelectItem value="Engaging">Menarik</SelectItem>
                            <SelectItem value="Promotional">Promosi</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={socialForm.control}
                  name="keyword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Kata Kunci (Opsional)</FormLabel>
                      <FormControl>
                        <Input placeholder="cth: #OtomasiBisnis" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isSocialLoading}>
                  {isSocialLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Buat Post
                </Button>
              </form>
            </Form>
            {(isSocialLoading || socialPost) && (
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Hasil</CardTitle>
                </CardHeader>
                <CardContent>
                  {isSocialLoading ? (
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>AI sedang berpikir...</span>
                    </div>
                  ) : (
                    socialPost && (
                      <Textarea
                        readOnly
                        value={socialPost.postContent}
                        className="min-h-[150px] text-base"
                      />
                    )
                  )}
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="article">
        <Card>
          <CardHeader>
            <CardTitle>Generator Draf Artikel</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...articleForm}>
              <form onSubmit={articleForm.handleSubmit(onArticleSubmit)} className="space-y-8">
                <FormField
                  control={articleForm.control}
                  name="prompt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prompt Artikel</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Jelaskan ide artikel Anda di sini. cth: Tulis sebuah artikel blog tentang 5 cara otomatisasi dapat membantu UMKM di Indonesia."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isArticleLoading}>
                  {isArticleLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Buat Draf
                </Button>
              </form>
            </Form>
            {(isArticleLoading || article) && (
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Hasil</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isArticleLoading ? (
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>AI sedang menulis...</span>
                    </div>
                  ) : (
                    article && (
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold font-headline">{article.title}</h3>
                        <div className="prose dark:prose-invert max-w-none whitespace-pre-wrap">
                          {article.content}
                        </div>
                      </div>
                    )
                  )}
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
