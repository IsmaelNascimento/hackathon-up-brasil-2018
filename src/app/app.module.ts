import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

// Locale
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import localePtExtra from '@angular/common/locales/extra/pt';
registerLocaleData(localePt, localePtExtra);

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

// Material
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatFormFieldModule,
  MatListModule,
  MatButtonModule,
  MatExpansionModule,
} from '@angular/material';


// Providers
import {AuthService} from './services/auth.service';
import {ColaboradorService} from './services/colaborador.service';

// Layout
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { NoneComponent } from './layouts/none/none.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NoneComponent,
  ],
  imports: [
    // Angular
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    // Material:
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
  ],
  providers: [
    AuthService,
    ColaboradorService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
