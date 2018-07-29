import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradorFormComponent } from './colaborador/colaborador-form/colaborador-form.component';

import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatFormFieldModule,
  MatListModule,
  MatButtonModule,
  MatExpansionModule,
  MatInputModule,
} from '@angular/material';

// PrimeNG
import {FieldsetModule} from 'primeng/fieldset';

@NgModule({
  imports: [
    CommonModule,
    // Material
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    // PrimeNG
    FieldsetModule
  ],
  exports: [
    ColaboradorFormComponent,
  ],
  declarations: [
    ColaboradorFormComponent
  ]
})
export class ComponentsModule { }
