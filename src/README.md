# The Sun Learning — Content Guide

Cómo escribir lecciones y cómo se organizan.

---

## Estructura de una lección

Cada lección es **un archivo `.md`** dentro de `src/content/lessons/`.
El nombre del archivo se convierte en la URL:

```text
present-simple.md  →  /lessons/present-simple
```

- Usa **kebab-case** (minúsculas y guiones): `present-simple.md`, no `PresentSimple.md`.
- Sin espacios, sin tildes, sin caracteres especiales.

---

## Frontmatter (metadatos)

Cada lección **debe** empezar con este bloque. Los campos entre `[ ]` son obligatorios.

```yaml
---
title: "Present Simple" # [obligatorio] Título visible
description: "El tiempo verbal base..." # [obligatorio] 1 línea resumen
category: "Gramática" # [obligatorio] Categoría (ver abajo)
categoryOrder: 10 # [opcional] Orden dentro de la categoría
level: "A1" # [obligatorio] Uno de: A1, A2, B1, B2, C1, C2
levelOrder: 10 # [opcional] Orden dentro del nivel
course: "Inglés" # [opcional] Default: "Inglés"
tags: ["verbos", "presente"] # [opcional] Default: []
---
```

### Valores válidos

| Campo      | Valores permitidos                 |
| ---------- | ---------------------------------- |
| `level`    | `A1`, `A2`, `B1`, `B2`, `C1`, `C2` |
| `category` | Ver lista abajo                    |
| `course`   | Texto libre (default `"Inglés"`)   |

### Sobre los órdenes

Usa **saltos de 10** para poder insertar lecciones entre dos existentes sin renumerar.

```text
categoryOrder: 10   →  primera lección de "Gramática" en el TOC
categoryOrder: 20   →  segunda
categoryOrder: 15   →  para insertar entre la 1 y la 2
```

Lo mismo aplica a `levelOrder`, pero ese orden es el de la **ruta del curso** (A1 → A2 → B1).

- `categoryOrder` → controla el orden en el **TOC** (agrupado por categoría).
- `levelOrder` → controla el orden en la **página del curso** (agrupado por nivel).

Si olvidas uno de ellos, se va al final (default: `999`).

---

## Categorías permitidas

- `Gramática`
- `Vocabulario`
- `Pronunciación`
- `Conversación`
- `Listening`
- `Reading`
- `Writing`
- `Cultura`

(Ampliar aquí cuando se añadan más.)

---

## Cuerpo del archivo

El cuerpo está dividido en **3 secciones obligatorias**, siempre en este orden:

```markdown
## Vocabulary

Lista de palabras y frases clave del tema.

- **Routine** — rutina
- **Habit** — hábito
- **Always** — siempre

## Grammar

Explicación de la estructura gramatical. Texto libre, listas, negritas.

- **Afirmativa:** Sujeto + verbo (+s/es en 3ª persona)
- **Negativa:** Sujeto + do/does + not + verbo
- **Interrogativa:** Do/Does + sujeto + verbo?

## Examples

Ejemplos reales de uso.

- I **work** every day.
- She **works** in a hospital.
- They **don't** like coffee.
```

### Reglas de las secciones

- Usa **`##`** (dos almohadillas) para los títulos. Nunca `#` ni `###` en el nivel superior.
- Los nombres son **exactos**: `Vocabulary`, `Grammar`, `Examples` (con mayúscula inicial, en inglés).
- **Todas las secciones son obligatorias**, aunque estén cortas.
- Si más adelante añadimos secciones (ej. `## Exercises`), se documentan aquí.

---

## Plantilla completa lista para copiar

```markdown
---
title: "Nombre de la lección"
description: "Descripción en una línea."
category: "Gramática"
categoryOrder: 10
level: "A1"
levelOrder: 10
tags: ["tag1", "tag2"]
---

## Vocabulary

- **Word** — traducción

## Grammar

Explicación de la gramática.

## Examples

- Ejemplo 1.
- Ejemplo 2.
```

---

## Reglas de estilo

- **Idioma**: el contenido está en español. Los términos en inglés van en **negrita** la primera vez.
- **Código**: si mencionas una palabra en inglés dentro de un texto, envuélvela en `**negrita**` o `` `code` `` según contexto.
- **Sin HTML**: usa solo Markdown. No `<div>` ni `<span>` en el contenido.
- **Sin encabezados `#`**: el título ya lo pone el frontmatter. Empieza directamente con `## Vocabulary`.
- **NUNCA agregar guiones grandes (—) a ninguna parte del texto`#`**: en cambio usa guiones normales (-)

---

## Ejemplos de referencia

Ver los archivos en `src/content/lessons/`:

- `present-simple.md` — ejemplo canónico de A1.
- `past-simple.md` — ejemplo de A1 con vocabulario y estructura.
