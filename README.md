# Página oficial de escuela estatal "Dr. José Francisco Torrealba"

## Estructura del proyecto

La estructura del proyecto se compone de esta manera

```text
/
├── public/ -> Assets Estáticos
├── src/
│   └── components/ -> Piezas pequeñas y repetibles usados entre páginas: Bótones, Selectores, Inputs, Barras...
│   └── layouts/ -> Disposiciones del sitio web: Header, Footer, Menu lateral...
│   └── assets/ -> Assets Dínamicos, osea que Astro preprocesa y luego manda al sitio.
│   └── pages/
│       └── index
│       └── 404
│       └── contacto
│       └── formación
└── package.json
```

La herramienta Astro busca por archivos `.astro` o `.md` en el directorio `src/pages/`.
**Aviso:**

Los nombres de cada uno de los archivos se exponen en la ruta del sitio web,
es decir las rutas expuestas son:

- / -> página principal, siempre inician en barra
- /404 -> Páginas de error
- /contacto -> Páginas de contactos
- /formación -> Páginas de oferta académica

Los componentes y layouts no influyen mucho en el producto final, puedes usar componentes Astro
o algún otro framework como React/Vue/Svelte/Preact/ u otras herramientas como HTMX/AlpineJs/Jquery;
_Por lo general se recomienda a este sitio componentres Astro para mantenerlo simple._

Assets estáticos (que no necesitan procesamiento) pueden ponerse en directorio `public/`.

## Comandos para cargar el sistema

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Instala las dependencias del sistema             |
| `pnpm dev`                | Inicia un servidor local en `localhost:4321`     |
| `pnpm build`              | Construye el sitio en producción en `./dist/`    |
| `pnpm preview`            | Inicia en modo previsualización antes de públicar|
| `pnpm astro ...`          | Carga comandos como `astro add`, `astro check`   |
| `pnpm astro -- --help`    | Consigue información de CLI de Astro             |
| `pnpm cf-typegen`         | (Re)genera los tipos de que usa el sitio web     |

## Referencias (Documentos en línea)

- [Framework Astro](https://docs.astro.build) y [Servidor público de Discord](https://astro.build/chat)
- [Tailwind CSS](https://tailwindcss.com/docs/styling-with-utility-classes)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/) y  [Wrangler](https://developers.cloudflare.com/workers/wrangler/)
