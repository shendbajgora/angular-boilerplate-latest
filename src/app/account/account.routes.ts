import { Routes } from '@angular/router';
import { ModuleEntry } from '../common/constants/urls';
import { AccountComponent } from './account.component';

const routes: Routes = [
  {
    path: ModuleEntry,
    component: AccountComponent,
    children: []
  }
];

export default routes;
