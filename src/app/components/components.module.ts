import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {ColaboradorFormComponent} from './colaborador/colaborador-form/colaborador-form.component';
import {ColaboradorListComponent} from './colaborador/colaborador-list/colaborador-list.component';
import {ColaboradorFiltroCompletoComponent} from './colaborador/colaborador-filtro-completo/colaborador-filtro-completo.component';
import {ColaboradorSelectStatusComponent} from './colaborador/colaborador-select-status/colaborador-select-status.component';
import {ColaboradorSelectDepartamentoComponent} from './colaborador/colaborador-select-departamento/colaborador-select-departamento.component';
import {ColaboradorSelectProdutoComponent} from './colaborador/colaborador-select-produto/colaborador-select-produto.component';

import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatFormFieldModule,
  MatListModule,
  MatButtonModule,
  MatExpansionModule,
  MatInputModule,
  MatTableModule,
  MatSortModule,
  MatHorizontalStepper,
  MatVerticalStepper,
  MatStep,
  MatStepperModule,
  MatOptionModule,
  MatSelectModule,
} from '@angular/material';

// PrimeNG
import {FieldsetModule} from 'primeng/fieldset';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    // Material
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    // PrimeNG
    FieldsetModule,
    MatStepperModule,
    MatOptionModule,
    MatSelectModule
  ],
  exports: [
    ColaboradorFormComponent,
    ColaboradorListComponent,
    ColaboradorFiltroCompletoComponent,
    ColaboradorSelectStatusComponent,
    ColaboradorSelectDepartamentoComponent,
    ColaboradorSelectProdutoComponent,
  ],
  declarations: [
    ColaboradorFormComponent,
    ColaboradorListComponent,
    ColaboradorFiltroCompletoComponent,
    ColaboradorSelectStatusComponent,
    ColaboradorSelectDepartamentoComponent,
    ColaboradorSelectProdutoComponent,
  ]
})
export class ComponentsModule {
}
