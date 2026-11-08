import { Component, ElementRef, computed, signal, viewChild } from '@angular/core';
import { CLUB, FORMACIONES, JUGADORES, Jugador, TITULARES } from '../../data/club.data';

interface JugadorEnCampo extends Jugador {
  horizontal: number;
  vertical: number;
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

  private readonly porDorsal = new Map(JUGADORES.map((jugador) => [jugador.dorsal, jugador]));

  /** Los 7 titulares colocados según la formación elegida. */
  readonly enCampo = computed<JugadorEnCampo[]>(() => {
    const huecos = FORMACIONES[this.formacion()];
    return TITULARES.map((dorsal, indice) => {
      const jugador = this.porDorsal.get(dorsal)!;
      const hueco = huecos[indice];
      return { ...jugador, horizontal: hueco.horizontal, vertical: hueco.vertical };
    });
  });

  /** Todos los que no son titulares. */
  readonly banquillo = computed(() => JUGADORES.filter((jugador) => !TITULARES.includes(jugador.dorsal)));

  /** Ficha del jugador seleccionado. */
  readonly ficha = computed(() => this.porDorsal.get(this.seleccionado()) ?? JUGADORES[0]);

  elegirFormacion(sistema: string): void {
    this.formacion.set(sistema);
  }

  private readonly fichaEl = viewChild.required<ElementRef<HTMLElement>>('fichaEl');

  seleccionar(dorsal: number): void {
    this.seleccionado.set(dorsal);
    this.mostrarFicha();
  }

  /** Si la ficha no se ve entera (móvil o PC), se desplaza hasta ella. */
  private mostrarFicha(): void {
    const ficha = this.fichaEl().nativeElement;
    const posicion = ficha.getBoundingClientRect();
    const cabecera = 80;
    if (posicion.top < cabecera || posicion.bottom > window.innerHeight) {
      ficha.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
