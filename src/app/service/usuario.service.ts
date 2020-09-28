import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/servicos';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  //Aqui ficar o CRUD
  create(data): Observable<any> {
    return this.http.post(baseUrl + '/adicionar', data); //URL + Dados do front;
  }
}