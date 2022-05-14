import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstructuraComponent } from '@layout/estructura/estructura.component';

const routes: Routes = [
  {
    path: '',
    component: EstructuraComponent //esta parte es para que se visualice lo que esta en estructura en el app component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})], //EL USEHASH ES PARA QUE QUITE EL GATO INICIAL DE ANGULAR AL MOMENTO DE AGREGAR LA RUTA
  exports: [RouterModule]
})
export class AppRoutingModule { }
