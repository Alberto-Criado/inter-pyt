import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CLUB } from '../data/club.data';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="pie">
      <div class="franja" aria-hidden="true"></div>
      <div class="container pie-in">
        <div class="marca">
          <img src="escudo.webp" alt="" width="72" height="72" />
          <p class="marca-nombre">{{ club.nombre }}</p>
        </div>
        <p class="lema">{{ club.lema }}</p>
        <a class="enlace" [href]="club.instagram" target="_blank" rel="noopener">Síguenos en Instagram</a>
      </div>
    </footer>
  `,
  styles: `
    .pie { background: var(--color-paper); color: var(--color-ink); }
    .franja { --ancho-raya: 48px; height: 16px; background: repeating-linear-gradient(90deg, var(--color-club) 0 var(--ancho-raya), var(--color-stripe-dark) var(--ancho-raya) calc(var(--ancho-raya) * 2)); }
    .pie-in {
      display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); align-items: end;
      gap: var(--space-xl) var(--gap-columns); padding-block: var(--space-3xl) var(--space-2xl);
    }
    .marca { display: flex; align-items: center; gap: var(--space-md); grid-column: 1 / -1; }
    .marca img { object-fit: contain; }
    .marca-nombre {
      font-family: var(--font-display); font-weight: 700; line-height: 1;
      font-size: clamp(3rem, 8vw + 1rem, 8rem); overflow-wrap: break-word; min-width: 0;
    }
    .lema { font-size: var(--text-lead); line-height: 1.45; max-width: 40ch; color: var(--color-ink-2); }
    .enlace {
      justify-self: end; font-weight: 600; font-size: var(--text-lg); color: var(--color-accent);
      text-decoration: underline; text-underline-offset: 0.2em; white-space: nowrap;
    }
    .enlace:hover { color: var(--color-accent-hover); }
    .enlace:active { color: var(--color-ink); }

    @media (max-width: 40rem) {
      .pie-in { grid-template-columns: minmax(0, 1fr); }
      .enlace { justify-self: start; }
    }
  `,
})
export class FooterComponent {
  readonly club = CLUB;
}
