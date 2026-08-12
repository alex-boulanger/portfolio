import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// One file per locale. The body holds the copy; frontmatter holds the bits
// that need to be translatable but aren't prose.
const landing = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/landing" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    links: z.array(
      z.object({
        label: z.string(),
        href: z.string().url(),
      }),
    ),
  }),
});

const personalProjects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/personal-projects" }),
  schema: z.object({
    title: z.string(),
    href: z.url(),
    order: z.number(),
    tech: z.array(z.string()),
    media: z.array(
      z.object({
        kind: z.enum(["image", "video", "screenshot"]),
        src: z.string(),
        alt: z.string(),
      }),
    ),
  }),
});

export const collections = { landing, personalProjects };
