import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CLUB } from '../data/club.data';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="container bar">
        <a routerLink="/" class="marca" (click)="menuAbierto.set(false)">
          <img src="escudo.webp" [alt]="'Escudo ' + club.nombre" width="44" height="44" />
          <span class="marca-texto">
            <span class="marca-nombre">{{ club.nombre }}</span>
            <span class="marca-temporada">Fútbol 7, temporada {{ club.temporada }}</span>
          </span>
        </a>

        <button
          type="button"
          class="toggle"
          [attr.aria-expanded]="menuAbierto()"
          aria-controls="menu-principal"
          [attr.aria-label]="menuAbierto() ? 'Cerrar menú' : 'Abrir menú'"
          (click)="alternarMenu()"
        >
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none"
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
    .header {
      position: sticky; top: 0; z-index: var(--z-sticky-nav);
      background: var(--color-paper);
      border-bottom: var(--rule-hair) solid var(--color-rule);
    }
    .bar {
      display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between;
      gap: var(--space-xs) var(--space-md); min-height: var(--header-height); padding-block: var(--space-sm);
    }
    .marca { display: flex; align-items: center; gap: var(--space-sm); text-decoration: none; color: var(--color-ink); }
    .marca:hover { color: var(--color-ink); }
    .marca img { object-fit: contain; }
    .marca-texto { display: flex; flex-direction: column; }
    .marca-nombre { font-family: var(--font-display); font-weight: 700; font-size: var(--text-xl); line-height: 1.05; }
    .marca-temporada { font-size: var(--text-sm); color: var(--color-muted); }

    nav { display: flex; flex-wrap: wrap; gap: var(--space-2xs); }
    nav a {
      padding: var(--space-sm) var(--space-sm); color: var(--color-ink-2); text-decoration: none;
      font-weight: 500; font-size: var(--text-md); white-space: nowrap;
      border-bottom: 2px solid transparent;
      transition: color var(--dur-micro) var(--ease-out), border-color var(--dur-micro) var(--ease-out);
    }
    nav a:hover { color: var(--color-ink); border-bottom-color: var(--color-rule); }
    nav a:active { color: var(--color-accent); }
    nav a.activo { color: var(--color-ink); font-weight: 600; border-bottom-color: var(--color-accent); }

    .toggle {
      display: none; width: 48px; height: 48px; align-items: center; justify-content: center;
      background: none; border: var(--rule-hair) solid var(--color-rule-2); border-radius: var(--radius-card);
      color: var(--color-ink); cursor: pointer;
    }
    .toggle:hover { background: var(--color-paper-2); }
    .toggle:active { background: var(--color-paper-3); }

    @media (max-width: 60rem) {
      .toggle { display: inline-flex; }
      nav { display: none; width: 100%; flex-direction: column; padding-bottom: var(--space-xs); }
      nav.abierto { display: flex; }
      nav a { border-bottom: var(--rule-hair) solid var(--color-rule); }
    }
  `,
})
export class HeaderComponent {
  readonly club = CLUB;
  readonly menuAbierto = signal(false);

  alternarMenu(): void {
    this.menuAbierto.update((abierto) => !abierto);
  }
}
