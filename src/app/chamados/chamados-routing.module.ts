import { ChamadoEditComponent } from './chamado-edit/chamado-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChamadosComponent } from './chamados.component';

const routes: Routes = [
  { path: '', component: ChamadosComponent },
  { path: 'novo', component: ChamadoEditComponent },
  { path: 'editar', component: ChamadoEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChamadosRoutingModule { }
