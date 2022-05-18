import { CarouselComponent } from './carousel/carousel.component';
// imprt components, IMPORTAR COMPONENTES
import { TituloH1Component } from "./titulos/titulo-h1/titulo-h1.component";
import { TarjetaUserComponent } from "./tarjetas/tarjeta-user/tarjeta-user.component";


export const components: any[] = [
  TituloH1Component,
  TarjetaUserComponent,
  CarouselComponent

];

//export all components, EXPORTAMOS TODOS LOS COMPONENTES
export * from "./titulos/titulo-h1/titulo-h1.component";
export * from "./tarjetas/tarjeta-user/tarjeta-user.component";
export * from './carousel/carousel.component';
