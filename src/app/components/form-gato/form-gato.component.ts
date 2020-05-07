import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { GatoService } from '../../services/gato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-gato',
  templateUrl: './form-gato.component.html',
  styleUrls: ['./form-gato.component.css']
})
export class FormGatoComponent implements OnInit {

  @Input() idData;
  @Input() urlImagen;
  @Input() infoGato;
  @Input() accion = false;
  @Output() getFavoritos = new EventEmitter();
  @Output() cancel = new EventEmitter();


   formGato: FormGroup;


  constructor(private gatoService: GatoService,
              private router: Router) { }

  ngOnInit(): void {
    this.fGato();
  }


  fGato() {

    this.formGato = new FormGroup({
        Nombre: new FormControl('', [Validators.required]),
        Edad: new FormControl('', [Validators.required]),
        Raza: new FormControl('', [Validators.required]),
        Foto: new FormControl(this.urlImagen, [Validators.required]),
    });

   }


   procesarFormGato() {
      this.formGato.controls.Foto.setValue(this.urlImagen);

      if (this.formGato.invalid) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Verifica que los campos estén diligenciados',
        });
        return;
      }
      this.cargando();

      this.gatoService.guardarGato(this.formGato.value)
      .subscribe(resp => {

         Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Agregado correctamente',
          showConfirmButton: false,
          timer: 1500
        });

         this.cancelar();
      }, err => {

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Verifica que los datos esten bien diligenciados',
          });
          return;
      });

   }

   mostrarFavoritos() {
     this.getFavoritos.emit(true);
   }

   actualizar() {

    this.formGato.controls.Foto.setValue(this.urlImagen);
    if (this.formGato.invalid) {
       Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'Verifica que los campos estén diligenciados',
       });
       return;
     }
    this.cargando();

    this.gatoService.editarGato(this.idData, this.formGato.value)
     .subscribe(resp => {
      this.cancelar();
      this.router.navigateByUrl('/gatos');
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Actualizado correctamente',
        showConfirmButton: false,
        timer: 1500
      });


     }, err => {

         Swal.fire({
           icon: 'error',
           title: 'Oops...',
           text: 'Verifica que los datos esten bien diligenciados',
         });
         return;
     });


   }

   cancelar() {
      this.cancel.emit(true);
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
