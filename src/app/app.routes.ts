import { Routes } from '@angular/router';
import { AuthGuard } from './common/guards/auth/auth.guard';
import { root, views } from './common/constants/urls';
import { NotFoundComponent } from './common/views/not-found/not-found.component';
import { LogoutComponent } from './common/views/logout/logout.component';

const routes: Routes = [
  {
    path: root.account,
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
    canLoad: [AuthGuard]
  },
  {
    path: root.auth,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
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
    redirectTo: root.auth,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: views.notFound
  }
];

export default routes;
