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
      {
        path: 'products/devices',
        title: 'Geidea | Devices',
        loadComponent: () =>
          import('./pages/device-selection/device-selection').then((m) => m.DeviceSelection),
      },
    ],
  },

  {
    path: 'login',
    title: 'Geidea|Login',
    loadComponent: () => import('./pages/login/login').then((m) => m.Login),
  },
  {
    path: 'register',
    title: 'Geidea|Register',
    loadComponent: () => import('./pages/register/register').then((m) => m.Register),
  },

  {
    path: '**',
    redirectTo: '',
  },
];
