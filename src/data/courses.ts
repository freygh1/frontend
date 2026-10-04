export type Level = "Principiante" | "Intermedio" | "Avanzado";

export type Lesson = {
  slug: string;
  title: string;
  description: string;
  course: string;
  category: string;
  level: Level;
  tags: string[];
};

export const lessons: Lesson[] = [
  {
    slug: "present-simple",
    title: "Present Simple",
    description: "El tiempo verbal base para hábitos y rutinas.",
    course: "Inglés",
    category: "Gramática",
    level: "Principiante",
    tags: ["verbos", "presente"],
  },
  {
    slug: "past-simple",
    title: "past Simple",
    description: "El tiempo verbal base para hábitos y rutinas pasadas.",
    course: "Inglés",
    category: "Gramática",
    level: "Principiante",
    tags: ["verbos", "presente"],
  },
];
