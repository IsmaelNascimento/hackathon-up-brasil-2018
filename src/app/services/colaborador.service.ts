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
        datacriacao: '19/10/2018',
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
        datacriacao: '19/10/2018',
        valor: 10.00,
        conta: 1925904
      },
      {
        cpf: '333.333.333-333',
        nome: 'Usuário 3',
        status: 'Inativo',
        matricula: '882',
        departamento: 'Outro departamento',
        produto: 'Combustivel Up Brasil',
        datacriacao: '20/10/2018',
        valor: 100.00,
        conta: 1925910
      },
      {
        cpf: '444.444.444-444',
        nome: 'Usuário 4',
        status: 'Demitido',
        matricula: '883',
        departamento: 'Só mais um',
        produto: 'Combustivel Up Brasil',
        datacriacao: '25/10/2018',
        valor: 153.25,
        conta: 2025910
      },
      {
        cpf: '555.555.555-55',
        nome: 'Usuário 5',
        status: 'Demitido',
        matricula: '884',
        departamento: 'E mais um',
        produto: 'Combustivel Up Brasil',
        datacriacao: '25/11/2018',
        valor: 1153.25,
        conta: 3025910
      }
    ]);
  }
}
