import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ImagenService } from '../../services/imagen.service';
import { IImagenes } from '../../interfaces/imagen';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  favoritos: [] = [];
  @Output() img = new EventEmitter();

  constructor(private imagenService: ImagenService) { }

  ngOnInit(): void {
    this.cargando();
    this.getFavoritos();
  }

  getFavoritos() {
    this.imagenService.getFavoritos()
    .subscribe((resp: any) => {
        console.log(resp);
        this.favoritos = resp.favoritos;
        Swal.close();
    });
  }

  seleccionarImagen(favorito) {
    this.img.emit(favorito);
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
