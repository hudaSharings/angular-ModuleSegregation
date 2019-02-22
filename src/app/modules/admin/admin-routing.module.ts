import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './pages';

const routes: Routes = [
  {
    path:'',
    data:{
      title:'Admin'
    },
    children:[
      {
        path:'',
        redirectTo:'users'
      },
      {
        path:'users',
        component:UsersComponent,
        data: {
          title: 'users'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
