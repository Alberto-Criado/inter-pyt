import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CLUB } from '../data/club.data';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="container bar">
        <a routerLink="/" class="marca" (click)="menuAbierto.set(false)">
          <img src="escudo.webp" [alt]="'Escudo ' + club.nombre" width="48" height="48" />
          <span>{{ club.nombre.toUpperCase() }}</span>
        </a>

        <button
          type="button"
          class="toggle"
          [attr.aria-expanded]="menuAbierto()"
          aria-controls="menu-principal"
          aria-label="Abrir menú"
          (click)="alternarMenu()"
        >
          <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>

        <nav id="menu-principal" aria-label="Principal" [class.abierto]="menuAbierto()">
          <a routerLink="/" routerLinkActive="activo" [routerLinkActiveOptions]="{ exact: true }"
             (click)="menuAbierto.set(false)">Inicio</a>
          <a routerLink="/plantilla" routerLinkActive="activo" (click)="menuAbierto.set(false)">Plantilla</a>
          <a routerLink="/" fragment="partidos" (click)="menuAbierto.set(false)">Partidos</a>
          <a routerLink="/" fragment="equipacion" (click)="menuAbierto.set(false)">Equipación</a>
          <a routerLink="/" fragment="patrocinadores" (click)="menuAbierto.set(false)">Patrocinadores</a>
        </nav>
      </div>
    </header>
  `,
  styles: `
    .header { position: sticky; top: 0; z-index: 50; background: var(--negro); border-bottom: 1px solid #1e2230; }
    .bar { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 8px 16px; padding-block: 14px; }
    .marca { display: flex; align-items: center; gap: 12px; text-decoration: none; color: var(--texto); }
    .marca img { object-fit: contain; }
    .marca span { font-family: var(--display); font-weight: 700; font-size: 24px; letter-spacing: 0.04em; }
    nav { display: flex; flex-wrap: wrap; gap: 4px; }
    nav a { padding: 12px 16px; color: var(--texto-2); text-decoration: none; font-weight: 500; font-size: 15px; border-bottom: 2px solid transparent; }
    nav a:hover { color: var(--texto); }
    nav a.activo { color: var(--texto); font-weight: 600; border-bottom-color: var(--oro); }
    .toggle { display: none; width: 48px; height: 48px; align-items: center; justify-content: center; background: none; border: 1px solid var(--borde-2); border-radius: 4px; color: var(--texto); cursor: pointer; }
    @media (max-width: 760px) {
      .toggle { display: inline-flex; }
      nav { display: none; width: 100%; flex-direction: column; padding-bottom: 8px; }
      nav.abierto { display: flex; }
      nav a { border-bottom: 1px solid #1e2230; }
    }
  `,
})
export class HeaderComponent {
  readonly club = CLUB;
  readonly menuAbierto = signal(false);

  alternarMenu(): void {
    this.menuAbierto.update((v) => !v);
  }
}
