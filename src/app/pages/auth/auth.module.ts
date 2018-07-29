import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AuthRoutingModule} from './auth-routing.module';

import {LoginComponent} from './login/login.component';

import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule,
  MatToolbarModule
} from '@angular/material';

import {CardModule} from 'primeng/card';
import {BlockUIModule} from 'primeng/blockui';
import {ProgressSpinnerModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    // PrimeNG
    CardModule,
    BlockUIModule,
    ProgressSpinnerModule,
    // Material
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  declarations: [LoginComponent]
})
export class AuthModule {
}
