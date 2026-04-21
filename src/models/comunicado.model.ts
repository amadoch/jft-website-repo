import { z } from "astro/zod";

export const comunicadoSchema = z.object({
  titulo: z.string(),
  slug: z.string(),
  resumen: z.string(),
  contenido: z.any(),
  imagen_destacada: z.object({
    alternativeText: z.string().nullable(),
    url: z.string()
  }),
  categoria: z.string()
})

export type ComunicadoSchema = z.infer<typeof comunicadoSchema>
