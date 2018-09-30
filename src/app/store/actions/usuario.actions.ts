import { Action } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const CARGAR_USUARIO = '[usuarios] Cargar usuario';
export const CARGAR_USUARIO_FAIL = '[usuarios] Cargar usuario FAIL';
export const CARGAR_USUARIO_SUCCESS = '[usuarios] Cargar usuario SUCCESS';

export class CargarUsuario implements Action {
    readonly type = CARGAR_USUARIO;

    //recibo el id del usuario que quiero cargar
    constructor( public id: string ){}
}

export class CargarUsuarioFail implements Action {
    readonly type = CARGAR_USUARIO_FAIL;

    //Lo que sea que suceda de error, lo almacenare en el PayLoad
    constructor( public payload: any ){}
}

export class CargarUsuarioSuccess implements Action {
    readonly type = CARGAR_USUARIO_SUCCESS;

    //Cuando se hace efectivamente la peticion y tenemos los usuarios, cuando se llame esto, va a cargar en el store todos los usuarios
    constructor( public usuario: Usuario ){}
}

export type usuarioAcciones =    CargarUsuario
                               | CargarUsuarioFail
                               | CargarUsuarioSuccess;