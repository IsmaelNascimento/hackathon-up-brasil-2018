import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = `http://127.0.0.1/hackathon%20up%20brasil%20backend/`;

  constructor(private http: HttpClient) {
  }

  getUser() {
    return JSON.parse( localStorage.getItem('user') );
  }

  saveUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  login (user, pass) {

    const postData = {
      user: user,
      pass: pass,
    };

    return this.http.post(`${this.URL}`, postData);
  }
}
