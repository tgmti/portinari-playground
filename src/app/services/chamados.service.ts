import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChamadosService {

  private chamados = this.getChamadosTeste();

  constructor() { }

  getChamados() {
    return this.chamados;
  }

  private getChamadosTeste() {
    return [
      { numero: '12345', titulo: 'teste de abertura de chamado', descricao: 'descricao longa', dataAbertura: '2020-03-01', url: '12345' },
      { numero: '12346', titulo: 'teste de abertura 02', descricao: 'descricao longa 2 ', dataAbertura: '2020-03-02', url: '12345' },
    ];
  }
}
