import { z } from "astro/zod";

export const comunicadoSchema = z.object({
  titulo: z.string(),
  slug: z.string(),
  resumen: z.string(),
  contenido: z.array(z.object()),
  imagen_destacada: z.object({
    alternativeText: z.nullable(z.string()),
    url: z.string()
  }),
  categoria: z.string()
})

export type ComunicadoSchema = z.infer<typeof comunicadoSchema>
