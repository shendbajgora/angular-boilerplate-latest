import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ],
  exports: [
    NotFoundComponent,
    LogoutComponent
  ]
})
export class ViewsModule { }
