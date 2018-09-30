import { Usuario } from "../../models/usuario.model";
import * as fromUsuario from '../actions';

//hacemos el State. o sea, cómo que luzca nuestro estado para manejar estos usuarios
export interface UsuarioState {
    user: Usuario;
    loaded: boolean;
    loading: boolean;
    error: any;
}

//ahora defino mi estado inicial
const estadoInicial: UsuarioState = {
    user: null,
    loaded: false,
    loading: false,
    error: null
}

//como esta funcion siempre regresa algo de tipo UsuariosState. yo se lo coloco al final
export function usuarioReducer ( state = estadoInicial, action: fromUsuario.usuarioAcciones ): UsuarioState {

    switch (action.type) {
        case fromUsuario.CARGAR_USUARIO:
        //cuando llame a CARGAR_USUARIOS regresare mi state pero le cambiare una sola propiedad a true.
        //en realidad esto pondra a mi aplicacion en un estado de carga pero aun no carga nada. eso lo haremos con los efectos.
            return {
                ...state,
                loading: true,
                error: null//esto es para que cuando vuelva a cargar ya el error esté vacio
            };
        case fromUsuario.CARGAR_USUARIO_SUCCESS:
        //esta funcion recibe a los usuarios y los cargaremos en nuestro arreglo de usuarios.puedo cargarlo tal cual como viene porque es un objeto independiente pero para estar seguros, vamos a usar el operador spread para romper las referencias de JS
            return {
                ...state,
                loading: false,
                loaded: true,
                user: {
                    ...action.usuario
                }
            };
        case fromUsuario.CARGAR_USUARIO_FAIL:
        //cuando tenga un error, mando el state tal cual como está, el loaded en false porque no se cargo nada, el loading en false porque ya terminó de cargar aunque con error y bueno el error. despues veremos cómo vamos a tratar ese error
            return {
                ...state,
                loaded: false,
                loading: false,
                error: {//esto lo configure asi despues de haber configurado mi effects y hacer que falle a proposito para ver como me devuelve el error. una vez visto esto, elegi que quiero mostrar e el error y lo coloque aca. antes solamente devolvia el payload completo.
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url
                }
            }
        default:
            return state;
    }
}
