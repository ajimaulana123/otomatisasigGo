'use server';
/**
 * @fileOverview An AI agent for generating social media content.
 *
 * - generateSocialMediaPost - A function that handles the generation of social media content.
 * - GenerateSocialMediaPostInput - The input type for the generateSocialMediaPost function.
 * - GenerateSocialMediaPostOutput - The return type for the generateSocialMediaPost function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSocialMediaPostInputSchema = z.object({
  topic: z.string().describe('The topic of the social media post.'),
  platform: z
    .enum(['Facebook', 'Twitter', 'Instagram', 'LinkedIn'])
    .describe('The social media platform for which the post is intended.'),
  tone: z
    .enum(['Informative', 'Funny', 'Engaging', 'Promotional'])
    .describe('The tone of the social media post.'),
  keyword: z.string().optional().describe('Optional keyword to include in the post.'),
});
export type GenerateSocialMediaPostInput = z.infer<typeof GenerateSocialMediaPostInputSchema>;

const GenerateSocialMediaPostOutputSchema = z.object({
  postContent: z.string().describe('The generated social media post content.'),
});
export type GenerateSocialMediaPostOutput = z.infer<typeof GenerateSocialMediaPostOutputSchema>;

export async function generateSocialMediaPost(input: GenerateSocialMediaPostInput): Promise<GenerateSocialMediaPostOutput> {
  return generateSocialMediaPostFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSocialMediaPostPrompt',
  input: {schema: GenerateSocialMediaPostInputSchema},
  output: {schema: GenerateSocialMediaPostOutputSchema},
  prompt: `You are an expert social media manager. Your goal is to create engaging social media content.

  Generate a social media post for the following platform: {{platform}}.
  The post should be about the following topic: {{topic}}.
  The tone of the post should be: {{tone}}.
  {{#if keyword}}Include the following keyword in the post: {{keyword}}.{{/if}}

  Here is the post content:`, 
});

const generateSocialMediaPostFlow = ai.defineFlow(
  {
    name: 'generateSocialMediaPostFlow',
    inputSchema: GenerateSocialMediaPostInputSchema,
    outputSchema: GenerateSocialMediaPostOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
