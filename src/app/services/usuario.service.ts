import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient) { }

  url = 'https://reqres.in/api';

  getUsers () {
    return this.http.get(`${this.url}/users?per_page=6&delay=3`).pipe(
      map( (usuario:any) => {
      return  usuario.data
      })
    )
  }

  getUser (id: string) {
    return this.http.get(`${this.url}/users/${id}`).pipe(
      map( (usuario:any) => {
      return  usuario.data
      })
    )
  }

}
