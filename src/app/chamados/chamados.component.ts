import { Component, OnInit } from '@angular/core';
import { ChamadosService } from '../services/chamados.service';
import { Observable } from 'rxjs';
import { PoPageAction, PoInfoOrientation } from '@po-ui/ng-components';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.css'],
  providers: [ChamadosService]
})
export class ChamadosComponent implements OnInit {

  chamados: Observable<any>;
  readonly pageActions: Array<PoPageAction> = [
    {
      label: 'Novo', icon: 'po-icon po-icon-plus-circle',
      action: () => this.router.navigate(['novo'], { relativeTo: this.route })
    }
  ];
  infoOrientation = PoInfoOrientation.Horizontal;

  constructor(
    private chamadosService: ChamadosService,
    private router: Router,
    private route: ActivatedRoute,
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
