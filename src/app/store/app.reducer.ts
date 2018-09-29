//puedo apuntar a la carpta de reducers nada mas porque ahi tengo un index que me exporta todos los reducer
import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

//de esta forma va a lucir mi AppState
export interface AppState {
    usuarios: reducers.UsuariosState;
}

export const appReducers: ActionReducerMap<AppState> = {
    usuarios: reducers.usuariosReducer
};