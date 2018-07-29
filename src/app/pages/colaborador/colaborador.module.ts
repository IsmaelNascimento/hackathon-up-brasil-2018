import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MaterialModule} from '../../material/material.module';

import { ColaboradorRoutingModule } from './colaborador-routing.module';
import { ColaboradorCadastrarComponent } from './colaborador-cadastrar/colaborador-cadastrar.component';
import { ColaboradorEditarComponent } from './colaborador-editar/colaborador-editar.component';
import { ColaboradorPesquisarComponent } from './colaborador-pesquisar/colaborador-pesquisar.component';

@NgModule({
  imports: [
    CommonModule,
    ColaboradorRoutingModule,
    MaterialModule,
  ],
  declarations: [ColaboradorCadastrarComponent, ColaboradorEditarComponent, ColaboradorPesquisarComponent]
})
export class ColaboradorModule { }
