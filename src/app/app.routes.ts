import { Routes } from '@angular/router';
import { root } from './common/constants/urls';
import { NotFoundComponent } from './common/views/not-found/not-found.component';

const routes: Routes = [
  {
    path: root.auth,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: root.account,
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
  {
    path: root.other,
    component: NotFoundComponent
  }
];

export default routes;
