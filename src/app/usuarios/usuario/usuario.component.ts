import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/store/app.reducers';
import { Store } from '@ngrx/store';
import { cargarUsuario } from 'src/app/store/actions';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  usuario: Usuario;

  ngOnInit() {


    this.store.select('usuario').subscribe(({user, loading, error})=> {
      this.usuario = user;
    })

    this.router.params.subscribe(
      ({id})=> {
        this.store.dispatch(cargarUsuario({id}));
      }
    )
  }

}
