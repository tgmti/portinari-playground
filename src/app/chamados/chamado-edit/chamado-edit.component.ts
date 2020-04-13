import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chamado-edit',
  templateUrl: './chamado-edit.html',
  styleUrls: ['./chamado-edit.component.css']
})
export class ChamadoEditComponent implements OnInit {

  numeroChamado: number;
  tituloChamado: string;
  dataAberturaChamado: Date;
  horaAberturaChamado: string;
  statusChamado: string;
  solicitanteChamado: string;
  emailSolicitanteChamado: string;
  descricaoChamado: string;

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    alert('salva');
  }

  cancel() {
    alert('cancela');
  }

}
