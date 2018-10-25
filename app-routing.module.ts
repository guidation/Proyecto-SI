import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaveComponent } from './clave/clave.component';
import { SigninComponent } from './signin/signin.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ComprasComponent } from './compras/compras.component';
import { BoardsComponent } from "./boards/boards.component";
import { BoardsDetailComponent } from "./boards-detail/boards-detail.component";
import { BoardsEComponent } from "./boards-e/boards-e.component";
import { BoardsEditComponent } from "./boards-edit/boards-edit.component";
import { UserLoginComponent} from "./users/user-login/user-login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AdminComponent} from "./admin/admin.component";



export const routes: Routes = [
  {path:"clave", component:ClaveComponent},
  {path:"signin", component:SigninComponent},
  {path:"compras", component:ComprasComponent},
  {path:"carrito", component:CarritoComponent},
  { path:"user", component:UserLoginComponent},
  {path: "dashboard", component:DashboardComponent},
  {path: "admin", component:AdminComponent},


  {
    path: 'boards',
    component: BoardsComponent,
    data: { title: 'Boards List' }
  },
  {
    path: 'boards-details/:id',
    component: BoardsDetailComponent,
    data: { title: 'Boards Details' }
  },
  {
    path: 'boards-e',
    component: BoardsEComponent,
    data: { title: 'Create Boards' }
  },
  {
    path: 'boards-edit/:id',
    component: BoardsEditComponent,
    data: { title: 'Edit Boards' }
  },
  { path: '',
    redirectTo: '/boards',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
