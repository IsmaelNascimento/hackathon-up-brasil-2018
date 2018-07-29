import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Sort} from '@angular/material';

// Services
import {ColaboradorService} from '../../../services/colaborador.service';

@Component({
  templateUrl: './colaborador-pesquisar.component.html',
  styleUrls: ['./colaborador-pesquisar.component.scss']
})
export class ColaboradorPesquisarComponent implements OnInit, AfterViewInit {


  filtro: any = {};
  sort: { active?: string, direction?: string } = {};

  // Pratos
  private _colaboradores;
  protected set colaboradores(r) {
    this._colaboradores = r;
  }
  protected get colaboradores() {
    if (!this._colaboradores) {
      return [];
    }
    return this._colaboradores
      .filter(d => {
        let check = true;
        if ( this.filtro.hasOwnProperty('geral') ) {
          check = check && (
            (d.cpf.toLowerCase().indexOf( this.filtro.geral.toLowerCase() ) >= 0) ||
            (d.nome.toLowerCase().indexOf( this.filtro.geral.toLowerCase() ) >= 0) ||
            (d.status.toLowerCase().indexOf( this.filtro.geral.toLowerCase() ) >= 0) ||
            (d.matricula.toLowerCase().indexOf( this.filtro.geral.toLowerCase() ) >= 0) ||
            (d.departamento.toLowerCase().indexOf( this.filtro.geral.toLowerCase() ) >= 0) ||
            (d.produto.toLowerCase().indexOf( this.filtro.geral.toLowerCase() ) >= 0) ||
            (d.datacriacao.toLowerCase().indexOf( this.filtro.geral.toLowerCase() ) >= 0) ||
            (d.valor == this.filtro.geral.toLowerCase()) ||
            (d.conta == this.filtro.geral.toLowerCase())
          );
        }
        if ( this.filtro.hasOwnProperty('cpf') ) {
          check = check && (d.cpf.toLowerCase().indexOf( this.filtro.cpf.toLowerCase() ) >= 0);
        }
        if ( this.filtro.hasOwnProperty('nome') ) {
          check = check && (d.nome.toLowerCase().indexOf( this.filtro.nome.toLowerCase() ) >= 0);
        }
        if ( this.filtro.hasOwnProperty('status') ) {
          check = check && (d.status.toLowerCase().indexOf( this.filtro.status.toLowerCase() ) >= 0);
        }
        if ( this.filtro.hasOwnProperty('matricula') ) {
          check = check && (d.matricula.toLowerCase().indexOf( this.filtro.matricula.toLowerCase() ) >= 0);
        }
        if ( this.filtro.hasOwnProperty('departamento') ) {
          check = check && (d.departamento.toLowerCase().indexOf( this.filtro.departamento.toLowerCase() ) >= 0);
        }
        if ( this.filtro.hasOwnProperty('produto') ) {
          check = check && (d.produto.toLowerCase().indexOf( this.filtro.produto.toLowerCase() ) >= 0);
        }
        return check;
      })
      .sort((a, b) => {
        if (!this.sort.active || this.sort.direction === '') {
          return false;
        }
        const isAsc = this.sort.direction === 'asc';
        switch (this.sort.active) {
          case 'cpf': return this.sortCompare(a.cpf, b.cpf, isAsc);
          case 'nome': return this.sortCompare(a.nome, b.nome, isAsc);
          case 'status': return this.sortCompare(a.status, b.status, isAsc);
          case 'matricula': return this.sortCompare(a.matricula, b.matricula, isAsc);
          case 'departamento': return this.sortCompare(a.departamento, b.departamento, isAsc);
          case 'produto': return this.sortCompare(a.produto, b.produto, isAsc);
          case 'datacriacao': return this.sortCompare(a.datacriacao, b.datacriacao, isAsc);
          case 'valor': return this.sortCompare(a.valor, b.valor, isAsc);
          case 'conta': return this.sortCompare(a.conta, b.conta, isAsc);
          default: return 0;
        }
      });
  }

  displayedColumns = ['cpf', 'nome', 'status', 'matricula', 'departamento', 'produto', 'datacriacao', 'valor', 'conta', 'opcoes'];

  constructor(protected colaboradorService: ColaboradorService) { }

  ngOnInit() {
    this.colaboradorService.getAll().subscribe(
      (data) => {
        this.colaboradores = data;
        console.log('Colaboradores', data);
      },
      (err) => {
        console.error('Erro', err);
      }
    );
  }

  ngAfterViewInit() {
  }

  remove(dish) {
    console.log('Remover', dish);
  }

  sortData(sort: Sort) {
    this.sort = sort;
  }

  private sortCompare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }


}
