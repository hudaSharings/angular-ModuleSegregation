import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserListComponent ,UserDetailComponent} from './components';
import {UsersComponent} from './pages'
@NgModule({
  declarations: [UserListComponent, UserDetailComponent, UsersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
