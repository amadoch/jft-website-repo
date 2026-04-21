import { strapiLoader } from "@sensinum/astro-strapi-loader"
import { defineCollection } from "astro:content"
import { comunicadoSchema } from "./models/comunicado.model"
import { contactoSchema } from "./models/contacto.model"


const contactoCollection = defineCollection({
  loader: strapiLoader('contacto', {
    url: import.meta.env.CMS_URL,
    token: import.meta.env.CMS_TOKEN,
  }, {
      fields: [
        'horario_apertura',
        'horario_cierre'
      ],
      populate: {
        contactos: true
      }
  }),
  schema: contactoSchema
})

const comunicadoCollection = defineCollection({
  loader: strapiLoader('comunicados', {
    url: import.meta.env.CMS_URL,
    token: import.meta.env.CMS_TOKEN,
    idGenerator(data) {
      return data.slug as string
    },
  }, {
    populate: {
      imagen_destacada: {
        fields: ['alternativeText', 'url'],
      }
    },
    pagination: {
      start: 0,
      limit: 10
    }
  }),
  schema: comunicadoSchema
})


export const collections = {
  contactoCollection,
  comunicadoCollection
}
