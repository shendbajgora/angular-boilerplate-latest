import { inject, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthService } from "@core/services";

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then((module) => module.AuthModule),
    canMatch: [() => !inject(AuthService).isAuthenticated() || inject(Router).createUrlTree([''])]
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then((component) => component.HomeComponent),
    canMatch: [() => inject(AuthService).isAuthenticated() || inject(Router).createUrlTree(['auth'])]
  },
  {
    path: 'logout',
    loadComponent: () => import('./pages/static/logout/logout.component').then((component) => component.LogoutComponent)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '**',
    loadComponent: () => import('./pages/static/not-found/not-found.component').then((component) => component.NotFoundComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
