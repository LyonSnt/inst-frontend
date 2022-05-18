export interface ITarjetaUser {
  id: number;
  avatar: string;
  nombre: string;
  genero: string;
  edad: string;
  descripcion: string;
  trabaja?: string; //el signo de interrogacion nos dice que es opcional
}
