import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CLUB, ESTADISTICAS, PATROCINADORES, PROXIMO_PARTIDO } from '../../data/club.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  readonly club = CLUB;
  readonly partido = PROXIMO_PARTIDO;
  readonly stats = ESTADISTICAS;
  readonly patrocinadores = PATROCINADORES;
}
