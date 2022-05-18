import { HttpClient } from '@angular/common/http';
import { ITarjetaUser } from '@shared/components/tarjetas/tarjeta-user/itarjeta-user.metadata';
import { ApiClass } from './../../schema/ApiClass.class';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class UsuarioService extends ApiClass {

  constructor(http: HttpClient) {
    super(http);
  }

  /*
  * Listamos todos los usuarios
  *
  */
  getallUsuarios(): Observable<{
    error: boolean,
    msg: string,
    dato: ITarjetaUser[]
  }> {
    const response = { error: false, msg: '', dato: [] as ITarjetaUser[] };
    return this.http.get<ITarjetaUser[]>(this.url + 'usuariosB')
      .pipe(
        map(r => {
          response.dato = r;
          return response;
        }),
        catchError(() => of(response))
      );
  }

  /*
  * Listamos los usuarios por id
  *
  */
  getUsuarioById(id: number): Observable<{
    error: boolean,
    msg: string,
    dato: ITarjetaUser[]
  }> {
    const response = { error: false, msg: '', dato: [] as ITarjetaUser[] };
    return this.http.get<ITarjetaUser[]>(this.url + 'usuariosB/' + id)
      .pipe(
        map(r => {
          response.dato = r;
          return response;
        }),
        catchError(() => of(response))
      );
  }

}
