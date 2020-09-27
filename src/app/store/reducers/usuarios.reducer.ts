import { createReducer, on } from '@ngrx/store';
import { cargarUsuarios, cargarUsuariosError, cargarUsuariosSuccess }  from '../actions';
import { Usuario } from '../../models/usuario.model';

export interface UsuariosState {
    users: Usuario[],
    loading: boolean,
    loaded: boolean,
    error: any     
};

const usuariosInitialState: UsuariosState = {
    users: [],
    loading: false,
    loaded: false,
    error: null
};

export const _usuariosReducer = createReducer(
    usuariosInitialState,
    on(
        cargarUsuarios,
        (state) => ({...state, loading: true}),
    ),
    on(
        cargarUsuariosSuccess,
        (state, {usuarios}) => ({...state, loading: false, loaded: true, users: [...usuarios]}),
    ),
    on(
        cargarUsuariosError,
        (state, {payload}) => ({...state, loading: false, loaded: false, error: payload}),
    ),
);

export function usuariosReducer(state, action) {
    return _usuariosReducer(state, action);
}
