# The Sun Learning - Content Guide

Cómo escribir lecciones y cómo se organizan.

---

## Estructura de una lección

Cada lección es **un archivo `.md`** dentro de `src/content/lessons/`.
El nombre del archivo se convierte en la URL:

```text
present-simple.md  ->  /lessons/present-simple
```

- Usa **kebab-case** (minúsculas y guiones): `present-simple.md`, no `PresentSimple.md`.
- Sin espacios, sin tildes, sin caracteres especiales.
- Si renombras el archivo, la URL cambia y los enlaces existentes se rompen.

---

## Frontmatter (metadatos)

Cada lección **debe** empezar con este bloque. Todos los campos son obligatorios salvo los marcados como `[opcional]`.

```yaml
---
title: "Present Simple" # [obligatorio] Título visible
description: "El tiempo verbal base..." # [obligatorio] 1 línea resumen
course: "Inglés" # [obligatorio] Curso al que pertenece
category: "Gramática" # [obligatorio] Categoría (ver abajo)
categoryOrder: 10 # [opcional] Orden dentro de la categoría
level: "A1" # [obligatorio] Uno de: A1, A2, B1, B2, C1, C2
levelOrder: 10 # [opcional] Orden dentro del nivel
tags: ["verbos", "presente"] # [opcional] Default: []
---
```

### Valores válidos

| Campo      | Valores permitidos                                                       |
| ---------- | ------------------------------------------------------------------------ |
| `course`   | Texto libre. Debe coincidir exactamente con el curso destino (ver abajo) |
| `category` | Ver lista abajo                                                          |
| `level`    | `A1`, `A2`, `B1`, `B2`, `C1`, `C2`                                       |
| `tags`     | Array de strings                                                         |

### Cómo funciona `course`

El valor de `course` debe coincidir **exactamente** con el de otras lecciones del mismo curso. Un typo ("Ingles" sin tilde vs "Inglés") crea un curso separado silenciosamente.

- Un curso nuevo se crea **automáticamente** la primera vez que aparece ese valor.
- El enlace al curso se genera a partir del `course` en minúsculas: `"Inglés"` -> `/courses/inglés`.

### Niveles CEFR

| Nivel | Significado        |
| ----- | ------------------ |
| `A1`  | Beginner           |
| `A2`  | Elementary         |
| `B1`  | Intermediate       |
| `B2`  | Upper Intermediate |
| `C1`  | Advanced           |
| `C2`  | Proficiency        |

### Sobre los órdenes

Usa **saltos de 10** para poder insertar lecciones entre dos existentes sin renumerar.

```text
categoryOrder: 10   ->  primera lección de "Gramática" en el TOC
categoryOrder: 20   ->  segunda
categoryOrder: 15   ->  para insertar entre la 1 y la 2
```

Lo mismo aplica a `levelOrder`, pero ese orden es el de la **ruta del curso** (A1 -> A2 -> B1).

- `categoryOrder` controla el orden en el **TOC** (agrupado por categoría).
- `levelOrder` controla el orden en la **página del curso** (agrupado por nivel) y en los botones Anterior/Siguiente.

Si dos lecciones comparten el mismo número, el orden entre ellas es indeterminado. Si olvidas el campo, se va al final (default: `999`).

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

> Nota: el schema de Astro no valida las categorías contra esta lista. Si escribes una categoría nueva, se creará silenciosamente. Mantén la lista actualizada a mano.

---

## Cuerpo del archivo

El cuerpo está dividido en **3 secciones obligatorias**, siempre en este orden:

```markdown
## Vocabulary

Lista de palabras y frases clave del tema.

- **Routine** - rutina
- **Habit** - hábito
- **Always** - siempre

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
course: "Inglés"
category: "Gramática"
categoryOrder: 10
level: "A1"
levelOrder: 10
tags: ["tag1", "tag2"]
---

## Vocabulary

- **Word** - traducción

## Grammar

Explicación de la gramática.

## Examples

- Ejemplo 1.
- Ejemplo 2.
```

---

## Cómo añadir una lección nueva (workflow)

1. Crea el archivo en `src/content/lessons/` con kebab-case.
2. Rellena el frontmatter (todos los campos obligatorios).
3. Escribe las 3 secciones del cuerpo (`Vocabulary`, `Grammar`, `Examples`).
4. Reinicia el server si estaba corriendo.
5. Comprueba que aparece en:
   - La **home** (dentro del curso, en la sección correspondiente).
   - El **TOC** (bajo su categoría, en la posición indicada por `categoryOrder`).
   - La **página del curso** (bajo su nivel, en la posición indicada por `levelOrder`).
   - El **buscador** (busca por su título o alguna tag).

---

## Reglas de estilo

- **Idioma**: el contenido está en español. Los términos en inglés van en **negrita** la primera vez.
- **Código**: si mencionas una palabra en inglés dentro de un texto, envuélvela en `**negrita**` o `` `code` `` según contexto.
- **Sin HTML**: usa solo Markdown. No `<div>` ni `<span>` en el contenido.
- **Sin encabezados `#`**: el título ya lo pone el frontmatter. Empieza directamente con `## Vocabulary`.
- **Sin em-dashes**: usa guiones normales (`-`), no guiones largos (`—`), ni en el contenido de las lecciones ni en esta documentación.

---

## Ejemplos de referencia

Ver los archivos en `src/content/lessons/`:

- `present-simple.md` - ejemplo canónico de A1.
- `past-simple.md` - ejemplo de A1 con vocabulario y estructura.
