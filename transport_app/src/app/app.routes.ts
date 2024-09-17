import { Routes } from '@angular/router';
import { children_routes } from './children-route';
import { TabPage } from './views/tab/tab.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'detail',
    loadComponent: () => import('./views/detail/detail.page').then( m => m.DetailPage)
  },
  {
    path: 'app',
    loadComponent: () => import('./views/tab/tab.page').then(m => m.TabPage),
    children: children_routes
  },
  {
    path: 'tabs',
    component: TabPage,
    children: children_routes
  },
  {
    path: 'tab1',
    loadComponent: () => import('./views/tab1/tab1.page').then( m => m.Tab1Page)
  },
  {
    path: 'etudiant',
    loadComponent: () => import('./vue/etudiant/etudiant.page').then( m => m.EtudiantPage)
  },
  {
    path: 'note',
    loadComponent: () => import('./vue/note/note.page').then( m => m.NotePage)
  },
  {
    path: 'propos',
    loadComponent: () => import('./vue/propos/propos.page').then( m => m.ProposPage)
  }
];
