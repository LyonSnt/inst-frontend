import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import * as fromComponents from './components';

@NgModule({

  imports: [

    //AGREGADO DEL 12-05 DE L 2022
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [...fromComponents.components],  //TRAE TODOS LOS COMPONENTES

  exports: [
    FormsModule,  //TODO ESTO ES PARA ERROR DE COLICION DE COMPONENTES
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    ...fromComponents.components
  ]
})
export class SharedModule { }
