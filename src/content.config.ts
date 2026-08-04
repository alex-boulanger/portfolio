import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One file per locale. The body holds the copy; frontmatter holds the bits
// that need to be translatable but aren't prose.
const landing = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/landing' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		links: z.array(
			z.object({
				label: z.string(),
				href: z.string().url(),
			})
		),
	}),
});

export const collections = { landing };
