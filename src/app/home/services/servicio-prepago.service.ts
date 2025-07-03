import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ServicioPrepago } from '../interfaces/servicio-prepago.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioPrepagoService {
  constructor() {}

  getServicioPrepago(): Observable<ServicioPrepago[]> {
    const data: ServicioPrepago[] = [
      {
        ckgId: '7007129208',
        tipo: 'Prepago',
        fechaActivacion: '2023-09-06T10:44:04',
        fechaCicloVida: '2025-08-31T23:59:59',
        estado: '2:Activo',
        ofertaPrimaria: 'P_GEN',
        ciclo: '',
        cicloProgramado: '',
        saldo: 0.00,
        tipoPromo: 'SAB'
      }
    ];
    return of(data);
  }
}
