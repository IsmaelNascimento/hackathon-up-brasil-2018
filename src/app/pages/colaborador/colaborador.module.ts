import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColaboradorRoutingModule } from './colaborador-routing.module';
import { ColaboradorCadastrarComponent } from './colaborador-cadastrar/colaborador-cadastrar.component';
import { ColaboradorEditarComponent } from './colaborador-editar/colaborador-editar.component';
import { ColaboradorPesquisarComponent } from './colaborador-pesquisar/colaborador-pesquisar.component';


import {ComponentsModule} from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ColaboradorRoutingModule,
    ComponentsModule,
  ],
  declarations: [ColaboradorCadastrarComponent, ColaboradorEditarComponent, ColaboradorPesquisarComponent]
})
export class ColaboradorModule { }
