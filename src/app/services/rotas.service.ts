import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AplicativosRotas } from '../model/AplicativosRotas';

@Injectable({
  providedIn: 'root'
})
export class RotasService {

  constructor(private httpClient: HttpClient) { }

  apiUrl: string = 'http://localhost:8080/api/aplicativo';

  buscarRotasAplicativo(idAplicativo: Number) {
    return this.httpClient.get(this.apiUrl + `/rotas/buscar-rotas-aplicativo/${idAplicativo}`);
  }

  buscarTodosOsAplicativos() {
    return this.httpClient.get<Array<AplicativosRotas>>(this.apiUrl + '/rotas/aplicativos-rotas');
  }
}
