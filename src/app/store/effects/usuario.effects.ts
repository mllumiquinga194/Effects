import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as usuarioActions from '../actions';
import { of } from 'rxjs'; //para convertir algo en un observable
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';

//SIEMPRE DEB INCLUIR MIS EFECTOS EN MI ARREGLO DE EFFECTS

@Injectable()

//El objetivo de los efectos es escuchar acciones que son mandadas al store.
export class UsuarioEffects {

    constructor(
        private actions$: Actions, //estas acciones son de import { Actions } from '@ngrx/effects';
        public _usuariosService: UsuarioService
    ) { }

    //le estoy diciendo que cuando se ejecute la accion CARGAR_USUARIOS, yo voy a estar escuchando por aqui. todo esto es un observable.
    @Effect()// dispatch: false este false puede que lo quite pero es para indicarle que no llame nuevamente a CARGAR_USUARIOS
    cargarUsuario$ = this.actions$.ofType(usuarioActions.CARGAR_USUARIO)
        .pipe(
            //con el switchMap ya no regresamos lo que trae CARGAR_USUARIOS, eso lo cancelamos y nos traemos un neuvo observable con usuariosActions.CargarUsuariosSuccess.
            switchMap( action => {
                // para que este action reconozca que es de tipo usuarioActions.CargarUsuario, se lo indico aca arriba en el switchMap((action: usuarioActions.CargarUsuario) => { pero no lo vamos a usar asi porque ya indica cierto grado de cmpeljidad a la aplicacion
                // console.log(action);
                const id = action['id'];//como no estoy aplicando el comentario de arriba, entonces obtengo asi mi id desde action

                return this._usuariosService.getUserById( id )
                    .pipe(
                        map(user => new usuarioActions.CargarUsuarioSuccess(user)),
                        catchError( error => of (new usuarioActions.CargarUsuarioFail( error )))
                    );
            })
        );
        
}