import { Component, OnDestroy, OnInit } from '@angular/core';
import { CAROUSEL_DATA_ITEMS } from '@data/constants/carousel.const';
import { UsuarioService } from '@data/services/api/usuario.service';
import { ICarouselItem } from '@shared/components/carousel/Icarousel-item.metadata';
import { ITarjetaUser } from '@shared/components/tarjetas/tarjeta-user/itarjeta-user.metadata';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  public carouselData: ICarouselItem[]; // = CAROUSEL_DATA_ITEMS;
  public usuarios2: ITarjetaUser[]; // = USUARIOS_DATO;
  public usuarioSubcripcion: Subscription;

  constructor(
    private servicioUsuario: UsuarioService
  ) {
    this.carouselData = CAROUSEL_DATA_ITEMS;
  /*   this.usuarios2 = []; */

  }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuarioSubcripcion = this.servicioUsuario
      .getallUsuarios()
      .subscribe(r => this.usuarios2 = (r.error) ? [] : r.dato)
  }


  ngOnDestroy(): void {
    if (this.usuarioSubcripcion){
      this.usuarioSubcripcion.unsubscribe();
    }
  }

}