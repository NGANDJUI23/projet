import { Routes } from '@angular/router';

export const children_routes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage)
  },
  {
    path: 'detail',
    loadComponent: () => import('./views/detail/detail.page').then(m => m.DetailPage)
  },
  {
    path: 'tab1',
    loadComponent: () => import('./views/tab/tab.page').then(m => m.TabPage)
  },
];
