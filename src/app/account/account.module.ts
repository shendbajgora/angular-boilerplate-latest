import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { HeaderModule } from '../common/components/header/header.module';
import { SidebarModule } from '../common/components/sidebar/sidebar.module';


@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    HeaderModule,
    SidebarModule
  ]
})
export class AccountModule {
}
