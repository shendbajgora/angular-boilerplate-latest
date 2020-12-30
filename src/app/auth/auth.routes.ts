import { Routes } from '@angular/router';
import { auth, moduleEntry } from '../common/constants/urls';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path: moduleEntry,
    component: AuthComponent,
    children: [
      {
        path: auth.login,
        component: LoginComponent
      },
      {
        path: auth.register,
        component: RegisterComponent
      },
      {
        path: auth.forgotPassword,
        component: ForgotPasswordComponent
      },
      {
        path: auth.resetPassword,
        component: ResetPasswordComponent
      },
      {
        path: moduleEntry,
        redirectTo: auth.login
      }
    ]
  }
];

export default routes;
