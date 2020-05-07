import { Injectable } from '@angular/core';
import { RouterService } from './router.service';

@Injectable({
  providedIn: 'root'
})
export class GatoService {

  constructor(private routerService: RouterService) { }



   getGatos() {

    return this.routerService.getQuery('gatos');

   }

   guardarGato(gato) {
     return this.routerService.postQuery('gatos', gato);
   }

   editarGato(id, data) {
     return this.routerService.putQuery(`gatos/${id}`, data);
   }

   eliminarGato(id) {
     return this.routerService.deleteQuery(`gatos/${id}`);
   }


}
