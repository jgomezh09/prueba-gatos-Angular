export interface GatoObject {
  ok: boolean;
  gato: Gato;
}

export interface Gato {
  _id: string;
  Nombre: string;
  Raza: string;
  Edad: number;
  Foto: string;
  __v: number;
}