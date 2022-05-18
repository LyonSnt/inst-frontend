import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "environments/environment";
import { of } from "rxjs";

export class ApiClass {
  public url = environment.uri;

  constructor(
    protected http: HttpClient

  ) { }

  error(error: HttpErrorResponse) {
    let mensajeError = '';
    if (error.error instanceof ErrorEvent) {
      mensajeError = error.error.message;
    } else {
      mensajeError = `Error de codigo: ${error.status}\nMessage:_${error.message}`;
    }
    return of({ error: true, msg: mensajeError, data: null }); //cuando hay error mandamos un mensaje diciendo que hay error, mensaje de rror y el dato es nulo
  }

}