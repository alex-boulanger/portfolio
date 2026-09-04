import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const landing = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/landing" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const personalProjects = defineCollection({
	loader: glob({ pattern: "*.md", base: "./src/content/personal-projects" }),
  schema: z.object({
    title: z.string(),
    href: z.string().refine(
      (href) => href.startsWith("/") || URL.canParse(href),
      "Project links must be absolute URLs or root-relative paths",
    ),
    cta: z.string(),
    order: z.number(),
    tech: z.array(z.string()),
    media: z.array(
      z.object({
        kind: z.enum(["image", "video", "screenshot"]),
        src: z.string(),
        alt: z.string(),
        width: z.number().int().positive(),
        height: z.number().int().positive(),
      }),
    ),
  }),
});

const articles = defineCollection({
	loader: glob({ pattern: "*.{md,mdx}", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    hero: z.object({
      src: z.string(),
      srcset: z.string().optional(),
      alt: z.string(),
      caption: z.string(),
      width: z.number().int().positive(),
      height: z.number().int().positive(),
    }),
	}),
});

export const collections = { landing, personalProjects, articles };
