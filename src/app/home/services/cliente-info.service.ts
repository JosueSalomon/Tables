import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ClienteInfo } from '../interfaces/cliente-Info.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteInfoService {
  constructor() {}

  getClienteInfo(): Observable<ClienteInfo[]> {
    const data: ClienteInfo[] = [
      {
        cuentaCliente: '0801200110655CCHN',
        segmento: 'B2C',
        nombre: 'LUIS GERARDO LAINEZ ZERON',
        identidad: '0801200110655',
        email: ''
      }
    ];
    return of(data);
  }
}
