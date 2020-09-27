import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit, OnDestroy {

  userSubs: Subscription;
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.userSubs = this.usuarioService.getUsers().subscribe( users => {
      console.log(users);
      this.usuarios = users;
    });
  }

  ngOnDestroy() {
    this.userSubs.unsubscribe();
  }

}
