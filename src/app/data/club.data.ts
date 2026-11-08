/**
 * DATOS DEL CLUB
 * ---------------------------------------------------------------
 * Edita este archivo para poner los datos reales: jugadores,
 * dorsales, próximo partido, estadísticas y patrocinadores.
 * Todo lo que aparece en la web sale de aquí.
 */

/** Posición de cada jugador (se muestra en la ficha y el banquillo). */
export type Posicion = 'Portero' | 'Defensa' | 'Lateral' | 'Mediocentro' | 'Delantero';

/** Línea del campo de cada hueco de la formación. */
export type Linea = 'Portero' | 'Defensa' | 'Medio' | 'Delantero';

export interface Jugador {
  dorsal: number;
  nombre: string;
  posicion: Posicion;
  partidos: number;
  goles: number;
}

/** Un hueco del campo, en % del campo: horizontal = izquierda→derecha, vertical = arriba→abajo. */
export interface Hueco {
  horizontal: number;
  vertical: number;
  posicion: Linea;
}

export const CLUB = {
  nombre: 'Inter PYT',
  temporada: '2026/27',
  lema: 'Rayas azules y negras, brotes verdes. Sentimiento de familia.',
  instagram: 'https://www.instagram.com/inter.pyt/',
  entrenador: 'Miguel Ruiz',
};

/** Con `confirmado: false` la web muestra "Pendiente de confirmar" en vez de los datos. */
export const PROXIMO_PARTIDO = {
  confirmado: true,
  rival: 'Los Chiwes',
  fecha: 'Dom 15 nov',
  hora: '16:00',
  campo: '',
  local: true,
};

export const ESTADISTICAS = {
  ultimoResultado: 'Inter PYT 4 – 0 La Laguna',
  ultimoPartidoFecha: 'Dom 8 nov · 9:00',
  posicionLiga: '1º · 12 puntos',
  maximoGoleador: 'Moreno · 4 goles',
};

/** `logo` es opcional: ruta a una imagen dentro de `public/`. Sin logo se muestra el nombre. */
export const PATROCINADORES: { nombre: string; logo?: string; web?: string }[] = [
  { nombre: 'Villalba PyT', logo: 'pyt-villalba.png', web: 'https://pytvillalba.es/' },
  { nombre: 'Autoescuela Grande', logo: 'autoescuela-grande.png', web: 'https://autoescuelagrande.com/' },
];

/**
 * Plantilla completa. Los 7 primeros de TITULARES (por dorsal) salen en el campo,
 * en el mismo orden que los huecos de la formación: portero, defensas, medios, delanteros.
 */
export const JUGADORES: Jugador[] = [
  { dorsal: 11, nombre: 'Alex', posicion: 'Lateral', partidos: 3, goles: 1 },
  { dorsal: 17, nombre: 'Grande', posicion: 'Portero', partidos: 3, goles: 0 },
  { dorsal: 8, nombre: 'Javi Bay', posicion: 'Lateral', partidos: 3, goles: 1 },
  { dorsal: 7, nombre: 'Carrero', posicion: 'Lateral', partidos: 4, goles: 0 },
  { dorsal: 5, nombre: 'Jesús', posicion: 'Defensa', partidos: 2, goles: 0 },
  { dorsal: 10, nombre: 'Juan', posicion: 'Delantero', partidos: 2, goles: 0 },
  { dorsal: 6, nombre: 'Visent', posicion: 'Lateral', partidos: 3, goles: 1 },
  { dorsal: 9, nombre: 'Moreno', posicion: 'Delantero', partidos: 3, goles: 4 },
  { dorsal: 22, nombre: 'Criado', posicion: 'Mediocentro', partidos: 2, goles: 1 },
  { dorsal: 16, nombre: 'Borre', posicion: 'Mediocentro', partidos: 4, goles: 1 },
  { dorsal: 13, nombre: 'Diego', posicion: 'Delantero', partidos: 3, goles: 0 },
  { dorsal: 20, nombre: 'Mugi', posicion: 'Mediocentro', partidos: 4, goles: 3 },
  { dorsal: 15, nombre: 'Suarez', posicion: 'Mediocentro', partidos: 2, goles: 0 },
  { dorsal: 14, nombre: 'Emilio', posicion: 'Mediocentro', partidos: 1, goles: 1 },
  { dorsal: 25, nombre: 'Marcos', posicion: 'Defensa', partidos: 4, goles: 0 },
  { dorsal: 70, nombre: 'Sergio', posicion: 'Mediocentro', partidos: 1, goles: 1 },
  { dorsal: 21, nombre: 'Rios', posicion: 'Lateral', partidos: 3, goles: 0 },
];

/**
 * Dorsales de los 7 titulares, en orden: POR, DEF…, MED…, DEL…
 */
export const TITULARES: number[] = [16, 7, 25, 8, 20, 70, 9];

export const FORMACIONES: Record<string, Hueco[]> = {
  '3-2-1': [
    { horizontal: 50, vertical: 89, posicion: 'Portero' },
    { horizontal: 20, vertical: 69, posicion: 'Defensa' },
    { horizontal: 50, vertical: 71, posicion: 'Defensa' },
    { horizontal: 80, vertical: 69, posicion: 'Defensa' },
    { horizontal: 32, vertical: 45, posicion: 'Medio' },
    { horizontal: 68, vertical: 45, posicion: 'Medio' },
    { horizontal: 50, vertical: 19, posicion: 'Delantero' },
  ],
  '2-3-1': [
    { horizontal: 50, vertical: 89, posicion: 'Portero' },
    { horizontal: 32, vertical: 70, posicion: 'Defensa' },
    { horizontal: 68, vertical: 70, posicion: 'Defensa' },
    { horizontal: 16, vertical: 46, posicion: 'Medio' },
    { horizontal: 50, vertical: 48, posicion: 'Medio' },
    { horizontal: 84, vertical: 46, posicion: 'Medio' },
    { horizontal: 50, vertical: 19, posicion: 'Delantero' },
  ],
  '3-1-2': [
    { horizontal: 50, vertical: 89, posicion: 'Portero' },
    { horizontal: 20, vertical: 69, posicion: 'Defensa' },
    { horizontal: 50, vertical: 71, posicion: 'Defensa' },
    { horizontal: 80, vertical: 69, posicion: 'Defensa' },
    { horizontal: 50, vertical: 47, posicion: 'Medio' },
    { horizontal: 30, vertical: 21, posicion: 'Delantero' },
    { horizontal: 70, vertical: 21, posicion: 'Delantero' },
  ],
};
