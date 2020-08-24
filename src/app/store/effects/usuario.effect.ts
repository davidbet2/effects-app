import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { of } from 'rxjs';




@Injectable()
export class UsuarioEffects {
    constructor(
        private actions$: Actions,
        private usuarioService: UsuarioService
    ) {}


    cargarUsurio$ = createEffect(
        ()=> this.actions$.pipe(
            ofType( usuariosActions.cargarUsuario ),
            mergeMap(
                (action) => this.usuarioService.getUser(action.id)
                .pipe(
                    map( users => usuariosActions.cargarUsuarioSuccess({usuario: users})),
                    catchError( err => of (usuariosActions.cargarUsuarioError({payload: err})))
                )
            )
        )
    );


}