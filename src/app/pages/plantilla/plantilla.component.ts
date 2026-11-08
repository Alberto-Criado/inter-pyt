import { Component, ElementRef, computed, signal, viewChild } from '@angular/core';
import { CLUB, FORMACIONES, JUGADORES, Jugador, TITULARES } from '../../data/club.data';

interface JugadorEnCampo extends Jugador {
  x: number;
  y: number;
}

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrl: './plantilla.component.css',
})
export class PlantillaComponent {
  readonly club = CLUB;
  readonly formaciones = Object.keys(FORMACIONES);

  readonly formacion = signal(this.formaciones[0]);
  readonly seleccionado = signal<number>(TITULARES[TITULARES.length - 1]);

  private readonly porDorsal = new Map(JUGADORES.map((j) => [j.dorsal, j]));

  /** Los 7 titulares colocados según la formación elegida. */
  readonly enCampo = computed<JugadorEnCampo[]>(() => {
    const huecos = FORMACIONES[this.formacion()];
    return TITULARES.map((dorsal, i) => {
      const j = this.porDorsal.get(dorsal)!;
      const h = huecos[i];
      return { ...j, x: h.x, y: h.y };
    });
  });

  /** Todos los que no son titulares. */
  readonly banquillo = computed(() => JUGADORES.filter((j) => !TITULARES.includes(j.dorsal)));

  /** Ficha del jugador seleccionado. */
  readonly ficha = computed(() => this.porDorsal.get(this.seleccionado()) ?? JUGADORES[0]);

  elegirFormacion(f: string): void {
    this.formacion.set(f);
  }

  private readonly fichaEl = viewChild.required<ElementRef<HTMLElement>>('fichaEl');

  seleccionar(dorsal: number): void {
    this.seleccionado.set(dorsal);
    this.mostrarFicha();
  }

  /** Si la ficha no se ve entera (móvil o PC), se desplaza hasta ella. */
  private mostrarFicha(): void {
    const ficha = this.fichaEl().nativeElement;
    const r = ficha.getBoundingClientRect();
    const cabecera = 80;
    if (r.top < cabecera || r.bottom > window.innerHeight) {
      ficha.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
