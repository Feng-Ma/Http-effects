import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
import { AppState } from 'src/app/store/app.reducers';
import { UsuarioService } from '../../services/usuario.service';
import { cargarUsuarios } from '../../store/actions/usuarios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit, OnDestroy {

  // userSubs: Subscription;
  usuarios: Usuario[] = [];
  loading: boolean = false;
  error: any;

  constructor(private usuarioService: UsuarioService,
              private store: Store<AppState>) { }

  ngOnInit() {
    // this.userSubs = this.usuarioService.getUsers().subscribe( users => {
    //   console.log(users);
    //   this.usuarios = users;
    // });
    this.store.select('usuarios').subscribe( data => {
      this.usuarios = data.users;
      this.loading = data.loading;
      this.error = data.error;
    });
    this.store.dispatch(cargarUsuarios());
  }

  ngOnDestroy() {
    // this.userSubs.unsubscribe();
  }

}
