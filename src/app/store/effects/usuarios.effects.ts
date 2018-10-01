import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { of } from 'rxjs'; //para convertir algo en un observable
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';


//SIEMPRE DEB INCLUIR MIS EFECTOS EN MI ARREGLO DE EFFECTS

@Injectable()

//El objetivo de los efectos es escuchar acciones que son mandadas al store.
export class UsuariosEffects {

    constructor(
        private actions$: Actions, //estas acciones son de import { Actions } from '@ngrx/effects';
        public _usuariosService: UsuarioService
    ) { }

    //le estoy diciendo que cuando se ejecute la accion CARGAR_USUARIOS, yo voy a estar escuchando por aqui. todo esto es un observable.
    @Effect()// dispatch: false este false puede que lo quite pero es para indicarle que no llame nuevamente a CARGAR_USUARIOS
    cargarUsuarios$ = this.actions$.ofType(usuariosActions.CARGAR_USUARIOS)
        .pipe(
            //con el switchMap ya no regresamos lo que trae CARGAR_USUARIOS, eso lo cancelamos y nos traemos un neuvo observable con usuariosActions.CargarUsuariosSuccess.
            switchMap(() => {
                return this._usuariosService.getUsers()
                    .pipe(
                        map(users => new usuariosActions.CargarUsuariosSuccess(users)),
                        catchError( error => of (new usuariosActions.CargarUsuariosFail( error )))
                    );
            })
        );
        
}