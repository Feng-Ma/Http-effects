import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { cargarUsuarios, cargarUsuariosSuccess, cargarUsuariosError } from '../actions/usuarios.actions';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';


@Injectable()
export class UsuariosEffects{

    constructor(
        private actions$: Actions,
        private usuarioService: UsuarioService
    ) {}

    cargarUsuarios$ = createEffect(() => this.actions$.pipe(
        ofType(cargarUsuarios),
        mergeMap(() => this.usuarioService.getUsers().pipe(
            // tap( data => console.log(data))
            map( data => cargarUsuariosSuccess({usuarios: data})),
            catchError( err => of(cargarUsuariosError({payload: err})))
        ))
    ));
}