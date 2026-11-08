import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CLUB, ESTADISTICAS, JUGADORES, PATROCINADORES, PROXIMO_PARTIDO, maximoGoleador } from '../../data/club.data';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  readonly club = CLUB;
  readonly partido = PROXIMO_PARTIDO;
  readonly stats = ESTADISTICAS;
  readonly patrocinadores = PATROCINADORES;
  readonly goleador = maximoGoleador(JUGADORES);
}
