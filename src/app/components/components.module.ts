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
    FieldsetModule,
    MatStepperModule,
    MatOptionModule,
    MatSelectModule
    //MatHorizontalStepper,
    // MatVerticalStepper,
  ],
  exports: [
    ColaboradorFormComponent,
    //MatHorizontalStepper,
    //MatVerticalStepper,
  ],
  declarations: [
    ColaboradorFormComponent,
    //MatHorizontalStepper,
    //MatVerticalStepper
  ]
})
export class ComponentsModule { }
