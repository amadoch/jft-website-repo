interface CampoTelefono  {
  id: number
  numero_telefonico: string
  icono_visible: boolean
}

interface Logo {
  id: number
  texto_alternativo: string
  imagen: {
    url: string
  }
}

interface Navegacion {
  id: number
  href: string,
  etiqueta: string,
  enlace_externo: boolean,
  tipo: string,
}

interface BannerProps {
  id: number,
  banner_visible: boolean,
  campo_telefono: CampoTelefono[]
}

interface HeaderProps {
  id: number
  titulo: string
  logo: Logo,
  navegacion: Navegacion[]
}

interface FooterProps {
  id: number
  derechos_de_autor: string
  navegacion: Navegacion[]
}

export interface Layout {
  id: number
  documentId: string
  titulo: string
  createdAt: string
  updatedAt: string
  publishedAt:string
  locale: string
  numero_de_contactos: BannerProps
  barra_de_navegacion: HeaderProps
  pie_de_pagina: FooterProps
}
