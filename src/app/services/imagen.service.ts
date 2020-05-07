import { Injectable } from '@angular/core';
import { RouterService } from './router.service';
@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  constructor(private router: RouterService) { }

  getImagenes() {
    return this.router.getQuery('imagenes');
  }

  addFavoritos(imagen: any) {
    console.log('el id', imagen.id)
    return this.router.postQuery('imagenes/favoritos', {id: imagen.id});
  }

  getFavoritos() {
    return this.router.getQuery('imagenes/favoritos');
  }

}
