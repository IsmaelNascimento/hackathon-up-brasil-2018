import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  private URL = `${environment.API_URL}`;

  constructor(private http: HttpClient) {
  }

  getColaboradores() {
    return this.http.get(`${this.URL}/PesquisaColaborador.aspx`);
  }
}
