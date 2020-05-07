import { Component, OnInit, Input } from '@angular/core';
import { GatoService } from '../../services/gato.service';
import { Gato } from '../../interfaces/gato';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.component.html',
  styleUrls: ['./gatos.component.css']
})
export class GatosComponent implements OnInit {

  urlImagen: string;
  infoActualizar: object;
  idDatos: string;

  accion = false;

  gatos: Gato[] = [];

  crearGato = false;
  misFavoritos = false;
  listaDB = true;


 constructor(private gatoService: GatoService) { }


  ngOnInit(): void {
    this.cargando();
    this.getGatos();
  }

  getGatos() {

    this.gatoService.getGatos()
    .subscribe((resp: any) => {
          this.gatos = resp.gatos;
          Swal.close();
    });

  }

  eliminarGato(gato: Gato) {
        this.gatoService.eliminarGato(gato._id)
        .subscribe(resp => {
           this.getGatos();
        });
  }

  editarGato(gato) {
    this.accion = true;
    this.urlImagen = gato.Foto;
    this.idDatos = gato._id;
    
  }


  cargarImagen(event) {
      this.urlImagen = event.image.url;
  }

  nuevoRegistro() {
    this.accion = true;
    this.urlImagen = '';
    this.crearGato = true;
    this.misFavoritos = false;
    this.listaDB = false;

  }

  getMisFavoritos() {
    this.misFavoritos = true;
  }

  cancelarAccion() {
    this.accion = false;
    this.crearGato = false;
    this.misFavoritos = false;
    this.listaDB = true;
    this.getGatos();
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
