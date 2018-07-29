import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ColaboradorService} from '../../../services/colaborador.service';
import {Sort} from '@angular/material';

@Component({
  selector: 'app-colaborador-list',
  templateUrl: './colaborador-list.component.html',
  styleUrls: ['./colaborador-list.component.scss']
})
export class ColaboradorListComponent implements OnInit, AfterViewInit {

  filtro: { nome?: string, restaurant?: number } = { nome: '' };
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
        const check1 = (d.nome.toLowerCase().indexOf( this.filtro.nome.toLowerCase() ) >= 0);
        let check2 = true;
        if (this.filtro.restaurant) {
          check2 = d.restaurantId == this.filtro.restaurant;
        }
        return check1 && check2;
      })
      .sort((a, b) => {
        if (!this.sort.active || this.sort.direction === '') {
          return false;
        }
        const isAsc = this.sort.direction === 'asc';
        return false;
      });
  }

  displayedColumns = ['cpf', 'nome', 'status', 'matricula', 'departamento', 'produto', 'datacriacao', 'valor', 'conta', 'opcoes'];

  constructor(protected colaboradorService: ColaboradorService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
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
