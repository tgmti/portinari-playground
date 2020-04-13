import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChamadosService {

  private readonly URL_API = 'https://my-json-server.typicode.com/tgmti/portinari-playground/chamados';

  constructor(private http: HttpClient) { }

  getChamados() {
    return this.http.get(this.URL_API);
  }
}
