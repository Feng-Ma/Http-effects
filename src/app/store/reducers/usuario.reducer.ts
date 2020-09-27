import { createReducer, on } from '@ngrx/store';
import { cargarUsuario, cargarUsuarioError, cargarUsuarioSuccess }  from '../actions';
import { Usuario } from '../../models/usuario.model';

export interface UsuarioState {
    id: string,
    user: Usuario,
    loading: boolean,
    loaded: boolean,
    error: any     
};

const usuarioInitialState: UsuarioState = {
    id: null,
    user: null,
    loading: false,
    loaded: false,
    error: null
};

export const _usuarioReducer = createReducer(
    usuarioInitialState,
    on(
        cargarUsuario,
        (state, props) => ({...state, loading: true, id: props.id}),
    ),
    on(
        cargarUsuarioSuccess,
        (state, {usuario}) => ({...state, loading: false, loaded: true, user: usuario}),
    ),
    on(
        cargarUsuarioError,
        (state, {payload}) => ({...state, loading: false, loaded: false, error: payload}),
    ),
);

export function usuarioReducer(state, action) {
    return _usuarioReducer(state, action);
}
