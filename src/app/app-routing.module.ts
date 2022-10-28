import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControleComponent } from './controle-estoque/controle/controle.component';
import { ListaComponent } from './controle-estoque/lista/lista.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'controle-estoque/lista',
    pathMatch: 'full'
  },
  {
    path:'controle-estoque/controle',
    component: ControleComponent
  },
  {
    path:'controle-estoque/lista',
    component: ListaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
