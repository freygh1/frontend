# A1 Content Generation Guide

You are helping populate content for **The Sun Learning**, a language learning platform built with Astro + Content Collections.

## Your task

Create lesson files inside `src/content/lessons/` for the **A1 (Beginner) English course**. One `.md` file per lesson.

## File naming

- Kebab-case, lowercase, ASCII only, no accents.
- Example: `subject-pronouns.md`, `present-simple.md`, `daily-routines.md`.
- The filename becomes the URL: `/lessons/subject-pronouns`.

## Frontmatter schema

Every lesson MUST start with this frontmatter (all fields required unless marked optional):

```yaml
---
title: "Title in English" # required, display title
description: "One-line summary in Spanish." # required, max 100 chars
course: "Inglés" # required, always "Inglés" for A1
category: "Gramática" # required, one of: Gramática, Vocabulario, Pronunciación, Conversación
categoryOrder: 10 # optional, position inside the category (use increments of 10)
level: "A1" # required, always "A1"
levelOrder: 10 # optional, position inside the level (use increments of 10)
tags: ["verbos", "presente"] # optional, 1-4 short lowercase Spanish tags
---
```

## Body format

Each lesson body MUST have exactly these 3 sections in this order, using `##` (two hashes):

```markdown
## Vocabulary

[5-8 key words or short phrases, in this format:]

- **English word** - traducción al español

## Grammar

[Explanation in Spanish of the grammar point. Use these patterns:]

- Bold for English terms: **Present Simple**
- Lists with `-` for structure points
- Short paragraphs, no more than 3-4 lines each

## Examples

[3-5 example sentences. Format:]

- I **work** every day. (Trabajo todos los días.)
```

## Style rules (STRICT)

1. **Language**: explanations in Spanish. English terms in **bold** on first mention.
2. **No em-dashes** (—). Use regular hyphens (`-`) only.
3. **No HTML**: pure Markdown.
4. **No `#` (single hash)**: only `##`.
5. **Section names must be exact**: `Vocabulary`, `Grammar`, `Examples` (capitalized, in English).
6. **No trailing spaces** in lines.
7. **File ends with a single newline**.
8. **Description max 100 characters**.

## Lesson list for A1

Create these 30 lessons. The `levelOrder` defines the recommended study path.

| #   | Filename                       | Title                             | Category      | catOrder | levelOrder |
| --- | ------------------------------ | --------------------------------- | ------------- | -------- | ---------- |
| 1   | subject-pronouns               | Subject Pronouns                  | Gramática     | 10       | 10         |
| 2   | to-be                          | To Be: am / is / are              | Gramática     | 20       | 20         |
| 3   | articles                       | Articles: a / an / the            | Gramática     | 30       | 30         |
| 4   | singular-plural                | Singular and Plural               | Gramática     | 40       | 40         |
| 5   | demonstratives                 | Demonstratives                    | Gramática     | 50       | 50         |
| 6   | possessive-adjectives          | Possessive Adjectives             | Gramática     | 60       | 60         |
| 7   | present-simple                 | Present Simple                    | Gramática     | 70       | 70         |
| 8   | present-simple-negative        | Present Simple: Negative          | Gramática     | 80       | 80         |
| 9   | present-simple-questions       | Present Simple: Questions         | Gramática     | 90       | 90         |
| 10  | adverbs-of-frequency           | Adverbs of Frequency              | Gramática     | 100      | 100        |
| 11  | can-cant                       | Can / Can't                       | Gramática     | 110      | 110        |
| 12  | there-is-there-are             | There is / There are              | Gramática     | 120      | 120        |
| 13  | have-have-got                  | Have / Have got                   | Gramática     | 130      | 130        |
| 14  | imperatives                    | Imperatives                       | Gramática     | 140      | 140        |
| 15  | past-simple-regular            | Past Simple: Regular Verbs        | Gramática     | 150      | 150        |
| 16  | past-simple-irregular          | Past Simple: Irregular Verbs      | Gramática     | 160      | 160        |
| 17  | past-simple-negative-questions | Past Simple: Negative & Questions | Gramática     | 170      | 170        |
| 18  | future-with-will               | Future with Will                  | Gramática     | 180      | 180        |
| 19  | future-with-going-to           | Future with Going to              | Gramática     | 190      | 190        |
| 20  | basic-prepositions             | Basic Prepositions                | Gramática     | 200      | 200        |
| 21  | numbers-time-dates             | Numbers, Time, and Dates          | Vocabulario   | 10       | 210        |
| 22  | family                         | Family                            | Vocabulario   | 20       | 220        |
| 23  | home                           | Home                              | Vocabulario   | 30       | 230        |
| 24  | food                           | Food                              | Vocabulario   | 40       | 240        |
| 25  | clothes                        | Clothes                           | Vocabulario   | 50       | 250        |
| 26  | daily-routines                 | Daily Routines                    | Vocabulario   | 60       | 260        |
| 27  | alphabet-basic-sounds          | Alphabet and Basic Sounds         | Pronunciación | 10       | 270        |
| 28  | vowels-consonants              | Vowels vs Consonants              | Pronunciación | 20       | 280        |
| 29  | greetings-introductions        | Greetings and Introductions       | Conversación  | 10       | 290        |
| 30  | asking-directions              | Asking for Directions             | Conversación  | 20       | 300        |

## Example: complete lesson

Use this as the canonical reference for style and structure. Every lesson must follow this format exactly.

```markdown
---
title: "To Be: am / is / are"
description: "El verbo más importante del inglés para describir y presentarse."
course: "Inglés"
category: "Gramática"
categoryOrder: 20
level: "A1"
levelOrder: 20
tags: ["verbos", "presente"]
---

## Vocabulary

- **I am** - yo soy / yo estoy
- **You are** - tú eres / tú estás
- **He is** - él es / él está
- **She is** - ella es / ella está
- **We are** - nosotros somos / estamos
- **They are** - ellos son / están
- **Name** - nombre
- **Age** - edad

## Grammar

El verbo **to be** equivale en español a **ser** o **estar**. Es irregular y cambia según el sujeto.

**Conjugación en presente:**

- **I** am
- **You** are
- **He / She / It** is
- **We / You / They** are

**Contracciones comunes:**

- I am = I'm
- You are = You're
- He is = He's
- She is = She's
- We are = We're
- They are = They're

**Estructura:**

- **Afirmativa:** Sujeto + am/is/are + complemento
- **Negativa:** Sujeto + am/is/are + not + complemento
- **Interrogativa:** Am/Is/Are + sujeto + complemento?

## Examples

- I **am** a student. (Soy estudiante.)
- She **is** from Spain. (Ella es de España.)
- They **are** tired. (Ellos están cansados.)
- **Are** you ready? (¿Estás listo?)
- He **isn't** at home. (Él no está en casa.)
```

## Quality checklist (verify before finishing)

- [ ] Every file uses kebab-case, no accents in the filename.
- [ ] Every frontmatter has all required fields.
- [ ] `course` is always `"Inglés"`.
- [ ] `level` is always `"A1"`.
- [ ] Body contains exactly `## Vocabulary`, `## Grammar`, `## Examples` in that order.
- [ ] No em-dashes (—) anywhere.
- [ ] Each file ends with a single newline.
- [ ] Descriptions are under 100 characters.
- [ ] Vocabulary has 5-8 entries.
- [ ] Examples have 3-5 sentences.

## Output

Create one file per lesson inside `src/content/lessons/`. Do not modify any other files. Do not create an index. Do not touch the schema or components.
