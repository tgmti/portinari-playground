import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChamadosRoutingModule } from './chamados-routing.module';
import { ChamadosComponent } from './chamados.component';
import { PoPageModule, PoInfoModule, PoFieldModule } from '@po-ui/ng-components';
import { PoListViewModule } from '@po-ui/ng-components';
import { ChamadoEditComponent } from './chamado-edit/chamado-edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ChamadosComponent, ChamadoEditComponent],
  imports: [
    CommonModule,
    ChamadosRoutingModule,
    PoPageModule,
    PoListViewModule,
    PoInfoModule,
    FormsModule,
    PoFieldModule
  ]
})
export class ChamadosModule { }
