import { Routes } from '@angular/router';
import { Root } from './common/constants/urls';
import { NotFoundComponent } from './common/views/not-found/not-found.component';

const routes: Routes = [
  {
    path: Root.Auth,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: Root.Account,
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
  {
    path: Root.Other,
    component: NotFoundComponent
  }
];

export default routes;
