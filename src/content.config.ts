import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const lessons = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/lessons" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    course: z.string().default("Inglés"),
    category: z.string(),
    categoryOrder: z.number().default(999),
    level: z.enum(["A1", "A2", "B1", "B2", "C1", "C2"]),
    levelOrder: z.number().default(999),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { lessons };
