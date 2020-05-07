import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';
import { GatosComponent } from './pages/gatos/gatos.component';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'imagenes', component: ImagenesComponent},
  {path: 'gatos', component: GatosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
