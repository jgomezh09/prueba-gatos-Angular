import { Component, OnInit } from '@angular/core';
import { ImagenService } from '../../services/imagen.service';
import { ImagenObject, IImagenes } from '../../interfaces/imagen';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  imagenes: IImagenes[] = [];

  constructor(private imagenService: ImagenService) { }


  ngOnInit(): void {
    this.cargando()
    this.getImagenes();

  }


   getImagenes() {

    this.imagenService.getImagenes()
    .subscribe((resp: ImagenObject) => {
       if (resp.ok) {
         this.imagenes = resp.Imagenes;
         Swal.close();
       }
      
    }, err => {
        Swal.close();
    });

   }

   agregarFavoritos(imagen: IImagenes) {

     this.imagenService.addFavoritos(imagen)
     .subscribe(resp => {

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Agregado correctamente',
        showConfirmButton: false,
        timer: 1500
      });

     });

   }


   cargando() {
    Swal.fire({
      title: 'Procesando...',
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();
  }


}
