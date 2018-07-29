import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../../../services/auth.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  protected logando = false;

  protected user = {
    user: 'UbxTeam1',
    pass: 'DtT4#pFB',
  };

  constructor(protected authService: AuthService, protected router: Router, protected snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  login() {

    this.logando = true;

    this.authService.login(this.user.user, this.user.pass).subscribe(
      (data: any) => {
        this.logando = false;
        if (data.hasOwnProperty('logado') && data.logado === true) {
          this.authService.saveUser(this.user);
          this.router.navigate(['/']);
        } else {
          if (data.hasOwnProperty('erro') && data.erro) {
            this.snackBar.open(data.erro, 'Fechar', {duration: 5000});
          } else {
            this.snackBar.open('Erro desconhecido! Tente novamente', 'Fechar', {duration: 5000});
          }
        }
      },
      (err) => {
        this.logando = false;
      },
      () => {
        this.logando = false;
      }
    );
  }

}
