import { Routes } from '@angular/router';
import { Auth, ModuleEntry } from '../common/constants/urls';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path: ModuleEntry,
    component: AuthComponent,
    children: [
      {
        path: Auth.Login,
        component: LoginComponent
      },
      {
        path: Auth.Register,
        component: RegisterComponent
      },
      {
        path: Auth.ForgotPassword,
        component: ForgotPasswordComponent
      },
      {
        path: Auth.ResetPassword,
        component: ResetPasswordComponent
      },
      {
        path: ModuleEntry,
        redirectTo: Auth.Login
      }
    ]
  }
];

export default routes;
