import { Component, OnInit } from '@angular/core';
import { ChamadosService } from '../services/chamados.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.css'],
  providers: [ChamadosService]
})
export class ChamadosComponent implements OnInit {

  chamados: Observable<any>;

  constructor(
    private chamadosService: ChamadosService
  ) { }

  ngOnInit(): void {
    this.chamados = this.chamadosService.getChamados();
  }

  showDetailModal(item) {
    // this.setModalItem(item);
    // this.detailsModalElement.open();
    alert("Abrir");
  }

}
