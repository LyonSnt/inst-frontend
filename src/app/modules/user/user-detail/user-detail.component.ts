import { UsuarioService } from '@data/services/api/usuario.service';
import { ITarjetaUser } from '@shared/components/tarjetas/tarjeta-user/itarjeta-user.metadata';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  /* export class UserDetailComponent { */

  public usuarios: ITarjetaUser[]; //= USUARIOS_DATO;
  public id: number;
  public verUsuario: any; //PUSE ANY PARA QUE no salga la linea roja de error aunque si funciona sin any.
  public usuarioSubcripcionDetalle: any;

  constructor(
    private route: ActivatedRoute,
    private servicioUsuario: UsuarioService
  ) {
    this.id = +this.route.snapshot.params.id; //este permite visualizar los datos a detalle.
   
  }

  ngOnInit(): void {
   this.getUsuariosDetalle();
  }

  getUsuariosDetalle() {
    this.usuarioSubcripcionDetalle = this.servicioUsuario
    .getUsuarioById(this.id)
    .subscribe(r => this.verUsuario = (r.error) ? [] : r.dato)
  }

}
