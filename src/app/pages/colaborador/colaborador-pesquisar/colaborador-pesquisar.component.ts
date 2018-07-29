import { Component, OnInit } from '@angular/core';

// Services
import {ColaboradorService} from '../../../services/colaborador.service';

@Component({
  selector: 'app-colaborador-pesquisar',
  templateUrl: './colaborador-pesquisar.component.html',
  styleUrls: ['./colaborador-pesquisar.component.scss']
})
export class ColaboradorPesquisarComponent implements OnInit {

  constructor(protected colaboradorService: ColaboradorService) { }

  ngOnInit() {
    this.colaboradorService.getColaboradores().subscribe(
      (data) => {
        console.log('deu', data);
      },
      err => {
        console.error('err', err);
      }
    );
  }

}
