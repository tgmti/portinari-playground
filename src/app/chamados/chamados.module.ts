import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChamadosRoutingModule } from './chamados-routing.module';
import { ChamadosComponent } from './chamados.component';
import { PoPageModule, PoInfoModule } from '@po-ui/ng-components';
import { PoListViewModule } from '@po-ui/ng-components';


@NgModule({
  declarations: [ChamadosComponent],
  imports: [
    CommonModule,
    ChamadosRoutingModule,
    PoPageModule,
    PoListViewModule,
    PoInfoModule
  ]
})
export class ChamadosModule { }
