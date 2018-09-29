import { Usuario } from "../../models/usuario.model";
import * as fromUsuarios from '../actions';

//hacemos el State. o sea, cómo que luzca nuestro estado para manejar estos usuarios
export interface UsuariosState {
    users: Usuario[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

//ahora defino mi estado inicial
const estadoInicial: UsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
}

//como esta funcion siempre regresa algo de tipo UsuariosState. yo se lo coloco al final
export function usuariosReducer ( state = estadoInicial, action: fromUsuarios.usuariosAcciones ): UsuariosState {

    switch (action.type) {
        case fromUsuarios.CARGAR_USUARIOS:
        //cuando llame a CARGAR_USUARIOS regresare mi state pero le cambiare una sola propiedad a true.
        //en realidad esto pondra a mi aplicacion en un estado de carga pero aun no carga nada. eso lo haremos con los efectos.
            return {
                ...state,
                loading: true
            };
        case fromUsuarios.CARGAR_USUARIOS_SUCCESS:
        //esta funcion recibe a los usuarios y los cargaremos en nuestro arreglo de usuarios.puedo cargarlo tal cual como viene porque es un objeto independiente pero para estar seguros, vamos a usar el operador spread para romper las referencias de JS
            return {
                ...state,
                loading: false,
                loaded: true,
                users: [
                    ...action.usuarios
                ]
            };
        case fromUsuarios.CARGAR_USUARIOS_FAIL:
        //cuando tenga un error, mando el state tal cual como está, el loaded en false porque no se cargo nada, el loading en false porque ya terminó de cargar aunque con error y bueno el error. despues veremos cómo vamos a tratar ese error
            return {
                ...state,
                loaded: false,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
