import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HomeComponent } from './componentes/home/home.component';
import { ErrorComponent } from './componentes/error/error.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { auth } from 'firebase';
import { AuthGuard } from './guards/auth.guard';
import { MenuComponent } from './page/menu/menu.component';
import { FormLocalComponent } from './componentes/form-local/form-local.component';
import { FormProductoComponent } from './componentes/form-producto/form-producto.component';


const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path: 'registro',
    component  : RegistroComponent
  },
  {
    path: 'form-local',
    component  : FormLocalComponent,
    canActivate : [AuthGuard],
    children: []
  },
  {
    path : 'listado',
    component : ListadoComponent,
    canActivate : [AuthGuard],
    children: []
  },
  {
    path : 'form-producto',
    component : FormProductoComponent,
    canActivate : [AuthGuard],
    children: []
  },
  {
    path : '**',
    component : ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
