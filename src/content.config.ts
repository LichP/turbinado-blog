import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const tagSchema = z.union([
  z.string(),
  z.record(z.string(), z.string())
]);

export type Tag = z.infer<typeof tagSchema>;

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './posts', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.coerce.date(),
			lastModified: z.coerce.date().optional(),
			tags: z.array(tagSchema),
	}),
});

export const collections = { blog };
