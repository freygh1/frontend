import { getCollection } from "astro:content";

export type TOCCategory = {
  category: string;
  lessons: { slug: string; title: string }[];
};

export type TOCCourse = {
  course: string;
  total: number;
  categories: TOCCategory[];
};

export async function getTOC(): Promise<TOCCourse[]> {
  const lessons = await getCollection("lessons");

  // Group by: course → category → lessons
  const map = new Map<string, Map<string, { slug: string; title: string }[]>>();

  for (const lesson of lessons) {
    const { course, category, title } = lesson.data;
    const slug = lesson.slug; // Astro generates this from the filename

    if (!map.has(course)) map.set(course, new Map());
    const categories = map.get(course)!;

    if (!categories.has(category)) categories.set(category, []);
    categories.get(category)!.push({ slug, title });
  }

  // Convert the Map into a sorted array
  return [...map.entries()].map(([course, categories]) => ({
    course,
    total: [...categories.values()].reduce((acc, arr) => acc + arr.length, 0),
    categories: [...categories.entries()].map(([category, lessons]) => ({
      category,
      lessons: lessons.sort((a, b) => a.title.localeCompare(b.title)),
    })),
  }));
}
