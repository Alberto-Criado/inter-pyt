import { Component } from '@angular/core';
import { CLUB } from '../data/club.data';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <div class="container pie">
        <div class="marca">
          <img src="escudo.webp" alt="" width="40" height="40" />
          <span>{{ club.nombre.toUpperCase() }}</span>
        </div>
        <div class="enlaces">
          <a [href]="club.instagram" target="_blank" rel="noopener">Instagram</a>
        </div>
      </div>
    </footer>
  `,
  styles: `
    footer { border-top: 1px solid #1e2230; }
    .pie { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 24px; padding-block: 40px; }
    .marca { display: flex; align-items: center; gap: 12px; }
    .marca img { object-fit: contain; }
    .marca span { font-family: var(--display); font-weight: 700; font-size: 20px; }
    .enlaces { display: flex; flex-wrap: wrap; gap: 24px; font-size: 15px; color: var(--texto-3); }
    .enlaces a { color: var(--texto-2); }
  `,
})
export class FooterComponent {
  readonly club = CLUB;
}
