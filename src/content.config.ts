import { generateCollections } from "@sensinum/astro-strapi-loader";

const strapiCollections = await generateCollections({
  url: import.meta.env.CMS_URL,
  token: import.meta.env.CMS_TOKEN,
}, [
  {
    name: 'contacto',
    query: {
      fields: ['horario_apertura', 'horario_cierre'],
      populate: {
        contactos: true
      }
    }
  }
])

export const collections = {
  ...strapiCollections
}
