import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {NavbarComponent} from './layouts/navbar/navbar.component';
import {NoneComponent} from './layouts/none/none.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: './pages/home/home.module#HomeModule',
      },
      {
        path: 'colaborador',
        loadChildren: './pages/colaborador/colaborador.module#ColaboradorModule',
      },
      {
        path: 'cartao',
        loadChildren: './pages/cartao/cartao.module#CartaoModule',
      }
    ]
  },
  {
    path: 'auth',
    component: NoneComponent,
    loadChildren: './pages/auth/auth.module#AuthModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
