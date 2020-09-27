import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: string = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.url}/users`)
            .pipe(
              map( resp => resp['data'])
            );
  }
}
