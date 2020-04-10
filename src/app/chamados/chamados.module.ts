import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChamadosRoutingModule } from './chamados-routing.module';
import { ChamadosComponent } from './chamados.component';


@NgModule({
  declarations: [ChamadosComponent],
  imports: [
    CommonModule,
    ChamadosRoutingModule
  ]
})
export class ChamadosModule { }
