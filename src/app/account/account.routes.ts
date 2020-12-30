import { Routes } from '@angular/router';
import { Account } from '../common/constants/urls';
import { AccountComponent } from './account.component';

const routes: Routes = [
  {
    path: Account.Base,
    component: AccountComponent,
    children: []
  }
];

export default routes;
