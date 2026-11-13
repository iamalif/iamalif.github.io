import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Public fields only. Private evidence, sources and review history stay outside this repository.
const scope = z.object({ value: z.string(), label: z.string(), note: z.string().optional() });
const link = z.object({ label: z.string(), url: z.string().url() });

const common = {
  title: z.string(),
  summary: z.string(),
  role: z.string(),
  context: z.string(),
  dates: z.string().optional(),
  group: z.string(),
  order: z.number().default(100),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
  diagramKind: z.enum(['pipeline', 'loop', 'merge', 'db', 'dist', 'bars']).default('pipeline'),
  // Compact entries have no detail page: the index links straight to the live site or repository.
  hasPage: z.boolean().default(true),
  url: z.string().url().optional(),
  urlLabel: z.string().optional(),
  status: z.string().optional(),
};

export const collections = {
  work: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
    schema: z.object({
      ...common,
      subtitle: z.string().optional(),
      org: z.string().optional(),
      roleTitle: z.string().optional(),
      contributionTitle: z.string().optional(),
      environment: z.array(z.string()).default([]),
      scope: z.array(scope).default([]),
      problem: z.string().optional(),
      contribution: z.string().optional(),
      // Optional split of dense contribution text: a separate "what the programme delivered" paragraph,
      // and scannable points (a short title and one or two sentences each), using existing approved copy only.
      programme: z.string().optional(),
      pointsTitle: z.string().optional(),
      points: z.array(z.object({ title: z.string(), text: z.string() })).default([]),
      team: z.string().optional(),
      diagram: z
        .object({
          title: z.string(),
          nodes: z.array(z.object({ title: z.string(), text: z.string() })),
          caption: z.string().optional(),
          placeholder: z.boolean().default(false),
        })
        .optional(),
      decisions: z.array(z.object({ tag: z.string(), text: z.string() })).default([]),
      evidence: z.object({ label: z.string(), url: z.string().url(), note: z.string() }).optional(),
      sharedCredit: z.string().optional(),
    }),
  }),
  projects: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
    schema: ({ image }) =>
      z.object({
        ...common,
        subtitle: z.string().optional(),
        tools: z.array(z.string()).default([]),
        data: z.string().optional(),
        links: z.array(link).default([]),
        scope: z.array(scope).default([]),
        problem: z.string().optional(),
        // Short plain-language summary shown before the detailed method ("What I built").
        built: z.string().optional(),
        // Heading varies by project type (default "How it was built"). A step may link to its repository folder.
        methodTitle: z.string().default('How it was built'),
        method: z.array(z.object({ title: z.string(), text: z.string(), url: z.string().url().optional() })).default([]),
        // Documented usage example, always labelled as example data where it applies.
        example: z.object({ title: z.string(), note: z.string().optional(), steps: z.array(z.string()) }).optional(),
        related: z.array(z.object({ label: z.string(), path: z.string() })).default([]),
        findings: z
          .object({
            intro: z.string(),
            evaluationContext: z.string(),
            rows: z.array(z.object({ label: z.string(), mean: z.number(), sd: z.number() })),
            tableCaption: z.string(),
            figure: z.object({ src: image(), alt: z.string(), caption: z.string() }).optional(),
          })
          .optional(),
        results: z
          .object({
            intro: z.string(),
            context: z.string().optional(),
            items: z.array(z.object({ label: z.string(), value: z.string(), note: z.string().optional() })).default([]),
            figure: z.object({ src: image(), alt: z.string(), caption: z.string() }).optional(),
          })
          .optional(),
        limits: z.array(z.string()).default([]),
        limitsTitle: z.string().default('Limits that matter'),
        aiNote: z.string().optional(),
        contribution: z.string().optional(),
        thumb: image().optional(),
        thumbAlt: z.string().optional(),
      }),
  }),
};
