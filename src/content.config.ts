import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const lessons = defineCollection({
  // Esta es la línea que falta y soluciona el error.
  // Le dice a Astro que busque archivos .md en la carpeta especificada.
  loader: glob({ pattern: "**/*.md", base: "./src/content/lessons" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    course: z.string().default("Inglés"),
    category: z.string(),
    level: z.enum(["Básico", "Intermedio", "Avanzado"]),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { lessons };
