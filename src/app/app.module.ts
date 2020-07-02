import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';

import {AngularFirestore} from "@angular/fire/firestore";

import {AngularFireStorageModule} from "@angular/fire/storage";

import { AngularFireAuthModule} from "@angular/fire/auth";
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ErrorComponent } from './componentes/error/error.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { MenuComponent } from './page/menu/menu.component';
import { FormLocalComponent } from './componentes/form-local/form-local.component';

import { JwtModule } from "@auth0/angular-jwt";
import { FormProductoComponent } from './componentes/form-producto/form-producto.component';
import { ModificarProductoComponent } from './componentes/modificar-producto/modificar-producto.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';


export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistroComponent,
    ErrorComponent,
    ListadoComponent,
    MenuComponent,
    FormLocalComponent,
    FormProductoComponent,
    ModificarProductoComponent,
    AcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule, // <- Agregue
    AngularFireAuthModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
      
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
