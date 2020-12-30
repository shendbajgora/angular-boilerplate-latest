import { Routes } from '@angular/router';
import { NotFoundComponent } from './common/views/not-found/not-found.component';
import { LogoutComponent } from './common/views/logout/logout.component';
import { root, views } from './common/constants/urls';

const routes: Routes = [
  {
    path: root.auth,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: root.account,
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
  },
  {
    path: views.logout,
    component: LogoutComponent
  },
  {
    path: views.notFound,
    component: NotFoundComponent
  },
  {
    path: '',
    redirectTo: root.account,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: views.notFound
  }
];

export default routes;
