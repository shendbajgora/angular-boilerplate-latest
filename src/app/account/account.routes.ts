import { Routes } from '@angular/router';
import { moduleEntry } from '../common/constants/urls';
import { AccountComponent } from './account.component';

const routes: Routes = [
  {
    path: moduleEntry,
    component: AccountComponent,
    children: []
  }
];

export default routes;
