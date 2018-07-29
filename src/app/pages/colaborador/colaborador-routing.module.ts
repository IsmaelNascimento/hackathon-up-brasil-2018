import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ColaboradorPesquisarComponent} from './colaborador-pesquisar/colaborador-pesquisar.component';
import {ColaboradorEditarComponent} from './colaborador-editar/colaborador-editar.component';
import {ColaboradorCadastrarComponent} from './colaborador-cadastrar/colaborador-cadastrar.component';

const routes: Routes = [
  {
    path: 'pesquisar',
    component: ColaboradorPesquisarComponent,
    data: {
      title: 'Pesquisar Colaboradores'
    }
  },
  {
    path: 'editar',
    component: ColaboradorEditarComponent,
    data: {
      title: 'Editar Colaborador'
    }
  },
  {
    path: 'cadastrar',
    component: ColaboradorCadastrarComponent,
    data: {
      title: 'Cadastrar Colaborador'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColaboradorRoutingModule { }
