import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

// Locale
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
import localePtExtra from '@angular/common/locales/extra/pt';

registerLocaleData(localePt, localePtExtra);

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

// Material
import {LayoutModule} from '@angular/cdk/layout';
import {MaterialModule} from './material/material.module';

// Providers
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';
import {ColaboradorService} from './services/colaborador.service';

// Layout
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {NoneComponent} from './layouts/none/none.component';

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
    RouterModule,
    // Material:
    LayoutModule,
    MaterialModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    ColaboradorService,
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
