import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/guides' }),
  schema: z.object({
    title: z.string().min(10),
    description: z.string().min(50).max(170),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    intent: z.enum(['commercial-investigation', 'task-completion']),
    primaryKeyword: z.string(),
    secondaryKeywords: z.array(z.string()),
    publishedAt: z.coerce.date(),
    reviewedAt: z.coerce.date(),
    reviewCycleDays: z.number().int().positive(),
    author: z.string(),
    status: z.enum(['draft', 'published']),
    ctaId: z.string().regex(/^github_[a-z0-9_]+$/),
    canonicalMode: z.literal('self'),
    noindex: z.boolean(),
    sources: z.array(z.object({ title: z.string(), url: z.url() })),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    order: z.number().int(),
  }),
});
export const collections = { guides };
