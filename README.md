# Inter PYT · Web del equipo (Angular 19)

Web del equipo de fútbol 7 Inter PYT con dos páginas:

- **Inicio** (`/`): portada, próximo partido, equipación y patrocinadores.
- **Plantilla** (`/plantilla`): campo de fútbol 7 con los 7 titulares, selector de sistema (3-2-1, 2-3-1, 3-1-2), ficha del jugador, banquillo y cuerpo técnico.

## Arrancar

Requisitos: Node.js 18.19+ o 20+.

```bash
npm install
npm start          # http://localhost:4200
npm run build      # versión para publicar en dist/inter-pyt/browser
```

## Poner los datos reales

Todo el contenido está en **`src/app/data/club.data.ts`**:

- `JUGADORES`: nombre, dorsal, posición y estadísticas de cada jugador.
- `TITULARES`: los 7 dorsales que salen en el campo, en orden portero → defensas → medios → delanteros.
- `FORMACIONES`: las posiciones en el campo (en %). Puedes añadir más sistemas.
- `PROXIMO_PARTIDO`, `ESTADISTICAS`, `PATROCINADORES` y `CLUB` (Instagram, entrenador…).
- El máximo goleador se calcula solo con los goles de `JUGADORES`.

Las imágenes están en `public/` en formato WebP (escudo, equipación y logos de patrocinadores).
Las fuentes (Oswald e Inter) se sirven desde la propia web con `@fontsource`, sin llamar a Google.

## Estructura

```
src/app/
  app.component.ts        cabecera + router-outlet + pie
  app.routes.ts           rutas (carga diferida)
  layout/                 header y footer
  data/club.data.ts       datos del club
  pages/home/             portada
  pages/plantilla/        plantilla en el campo
```

Hecho con componentes standalone, signals y el nuevo control flow (`@for`, `@let`) de Angular 19.

## Publicar

Al ser una SPA, en el hosting configura que todas las rutas sirvan `index.html`
(`public/_redirects` ya lo hace en Netlify y Cloudflare Pages; en Vercel/Firebase, rewrite a `/index.html`).

`public/_headers` añade las cabeceras de seguridad (CSP, nosniff, Referrer-Policy…) en Netlify y Cloudflare Pages.
Cuando tengas dominio, pon la URL completa en `og:image` de `src/index.html` para la vista previa al compartir.
