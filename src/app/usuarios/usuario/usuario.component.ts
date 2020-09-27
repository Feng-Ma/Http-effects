import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { AppState } from 'src/app/store/app.reducers';
import { Store } from '@ngrx/store';
import { cargarUsuario } from 'src/app/store/actions';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [
  ]
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario = null;
  constructor(private router: ActivatedRoute,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('usuario').subscribe( data => this.usuario = data.user);
    this.router.params.subscribe( parametros => {
      this.store.dispatch(cargarUsuario({id: parametros.id}))
    });
  }

}
