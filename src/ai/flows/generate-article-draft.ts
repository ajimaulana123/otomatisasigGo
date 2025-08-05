// The AI generates article drafts from a prompt.
// It includes the `generateArticleDraft` function, `GenerateArticleDraftInput`, and `GenerateArticleDraftOutput`.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateArticleDraftInputSchema = z.object({
  prompt: z.string().describe('The prompt to generate an article draft from.'),
});
export type GenerateArticleDraftInput = z.infer<typeof GenerateArticleDraftInputSchema>;

const GenerateArticleDraftOutputSchema = z.object({
  title: z.string().describe('The title of the article.'),
  content: z.string().describe('The content of the article.'),
});
export type GenerateArticleDraftOutput = z.infer<typeof GenerateArticleDraftOutputSchema>;

export async function generateArticleDraft(input: GenerateArticleDraftInput): Promise<GenerateArticleDraftOutput> {
  return generateArticleDraftFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateArticleDraftPrompt',
  input: {schema: GenerateArticleDraftInputSchema},
  output: {schema: GenerateArticleDraftOutputSchema},
  prompt: `You are an expert article writer. Please generate an article draft based on the following prompt. Ensure the article has a title and content.\n\nPrompt: {{{prompt}}}`,
});

const generateArticleDraftFlow = ai.defineFlow(
  {
    name: 'generateArticleDraftFlow',
    inputSchema: GenerateArticleDraftInputSchema,
    outputSchema: GenerateArticleDraftOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
