import { generateCollections } from "@sensinum/astro-strapi-loader"

const strapiCollections = await generateCollections({
  url: import.meta.env.CMS_URL,
  token: import.meta.env.CMS_TOKEN,
}, [
  {
    name: 'contacto',
    query: {
      fields: [
        'horario_apertura',
        'horario_cierre'
      ],
      populate: {
        contactos: true
      }
    }
  },
  {
    name: 'comunicados',
    collectionName: 'comunicado',
    idGenerator(data) {
      return data.slug as string
    },
    query: {
      filters: {
        categoria: {
          $eq: 'comunicado'
        }
      },
      pagination: {
        start: 0,
        limit: 10,
      },
    }
  },
  {
    name: 'comunicados',
    collectionName: 'aviso',
    idGenerator(data) {
      return data.slug as string
    },
    query: {
      filters: {
        categoria: {
          $eq: 'aviso'
        }
      },
      pagination: {
        start: 0,
        limit: 10,
      },
    }
  },
  {
    name: 'comunicados',
    collectionName: 'evento',
    idGenerator(data) {
      return data.slug as string
    },
    query: {
      filters: {
        categoria: {
          $eq: 'evento'
        }
      },
      pagination: {
        start: 0,
        limit: 10,
      },
    }
  }
])

export const collections = {
  ...strapiCollections
}
