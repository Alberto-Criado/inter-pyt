import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Inter PYT · Fútbol 7',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'plantilla',
    title: 'Plantilla · Inter PYT',
    loadComponent: () =>
      import('./pages/plantilla/plantilla.component').then((m) => m.PlantillaComponent),
  },
  { path: '**', redirectTo: '' },
];
