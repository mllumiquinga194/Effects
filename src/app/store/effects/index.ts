//importo los efectos para crear mi array que sera utilizado en el appmodule.
import { UsuariosEffects } from './usuarios.effects';
import { UsuarioEffects } from './usuario.effects';

//creo mi arreglo
export const effectsArr: any[] = [
    UsuariosEffects,
    UsuarioEffects
];

//exporto todos mis efectos para que sean utilizados
export * from './usuarios.effects';
export * from './usuario.effects';