import { Action } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const CARGAR_USUARIOS = '[usuarios] Cargar usuarios';
export const CARGAR_USUARIOS_FAIL = '[usuarios] Cargar usuarios FAIL';
export const CARGAR_USUARIOS_SUCCESS = '[usuarios] Cargar usuarios SUCCESS';

export class CargarUsuarios implements Action {
    readonly type = CARGAR_USUARIOS;
}

export class CargarUsuariosFail implements Action {
    readonly type = CARGAR_USUARIOS_FAIL;

    //Lo que sea que suceda de error, lo almacenare en el PayLoad
    constructor( public payload: any ){}
}

export class CargarUsuariosSuccess implements Action {
    readonly type = CARGAR_USUARIOS_SUCCESS;

    //Cuando se hace efectivamente la peticion y tenemos los usuarios, cuando se llame esto, va a cargar en el store todos los usuarios
    constructor( public usuarios: Usuario[] ){}
}

export type usuariosAcciones =    CargarUsuarios
                               | CargarUsuariosFail
                               | CargarUsuariosSuccess;