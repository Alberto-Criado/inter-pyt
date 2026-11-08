import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Inter PYT · Fútbol 7',
    loadComponent: () => import('./pages/home/home.component').then((modulo) => modulo.HomeComponent),
  },
  {
    path: 'plantilla',
    title: 'Plantilla · Inter PYT',
    loadComponent: () =>
      import('./pages/plantilla/plantilla.component').then((modulo) => modulo.PlantillaComponent),
  },
  { path: '**', redirectTo: '' },
];
