import { z } from "astro/zod";

export const contactoSchema = z.object({
  horario_apertura: z.string(),
  horario_cierre: z.string(),
  contactos: z.array(z.object({
    id: z.number(),
    telefono: z.string()
  }))
})