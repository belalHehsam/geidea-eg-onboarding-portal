import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/layout/layout').then((m) => m.Layout),
    children: [
      {
        path: '',
        title: 'Geidea | Home',
        loadComponent: () => import('./pages/home/home/home').then((m) => m.Home),
      },
    ],
  },

  {
    path: 'login',
    title: 'Geidea|Login',
    loadComponent: () => import('./pages/login/login').then((m) => m.Login),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
