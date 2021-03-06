import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in/api';

  constructor( private _http: HttpClient ) { }


  getUsers(){

    return this._http.get(`${ this.url }/users?per_page=20`)//&delay=1 para que tarde 1 segundo en aparecer
    .pipe(
      map( resp =>resp['data'])//para filtrar que solamente me reciba la data y no el resto de informacion que recibe del api

      // si fueran mas de una linea lo hago asi!
      // map( resp => {
      //   return resp['data'];//para filtrar que solamente me reciba la data y no el resto de informacion que recibe del api
      // })
    );
  }

  getUserById( id: string ){

    return this._http.get(`${ this.url }/users/${ id }`)//&delay=1 para que tarde 1 segundo en aparecer
    .pipe(
      map( resp =>resp['data'])//para filtrar que solamente me reciba la data y no el resto de informacion que recibe del api

      // si fueran mas de una linea lo hago asi!
      // map( resp => {
      //   return resp['data'];//para filtrar que solamente me reciba la data y no el resto de informacion que recibe del api
      // })
    );
  }
}

