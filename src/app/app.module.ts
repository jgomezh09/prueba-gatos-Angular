import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';
import { GatosComponent } from './pages/gatos/gatos.component';
import { FormGatoComponent } from './components/form-gato/form-gato.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    ImagenesComponent,
    GatosComponent,
    FormGatoComponent,
    FavoritosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
