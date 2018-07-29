import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  private URL = `${environment.API_URL}`;

  constructor(private http: HttpClient) {
  }

  getColaboradores() {
    // return this.http.get(`${this.URL}/PesquisaColaborador.aspx`);
  }

  getAll() {
    return of([
      {
        cpf: '111.111.111-11',
        nome: 'Nome do usuário',
        status: 'Ativo',
        matricula: '880',
        departamento: 'Teste',
        produto: 'Alimentação Up Brasil',
        datacriacao: '19/10/2018 09:45:28',
        valor: 1.00,
        conta: 1925908
      },
      {
        cpf: '222.222.222-22',
        nome: 'Nome do user 2',
        status: 'Ativo',
        matricula: '881',
        departamento: 'Teste',
        produto: 'Alimentação Up Brasil',
        datacriacao: '19/10/2018 09:45:28',
        valor: 10.00,
        conta: 1925904
      }
    ]);
  }
}
