import { Component, OnInit } from '@angular/core';

// Services
import {ColaboradorService} from '../../../services/colaborador.service';

@Component({
  templateUrl: './colaborador-pesquisar.component.html',
  styleUrls: ['./colaborador-pesquisar.component.scss']
})
export class ColaboradorPesquisarComponent implements OnInit {

  protected colaboradores;

  constructor(protected colaboradorService: ColaboradorService) { }

  ngOnInit() {

  }

}
