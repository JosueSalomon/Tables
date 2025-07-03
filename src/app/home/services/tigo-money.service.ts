import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TigoMoneyInfo } from '../interfaces/tigo-money-info.interface';

@Injectable({
  providedIn: 'root'
})
export class TigoMoneyService {
  constructor() {}

  getTigoMoneyInfo(): Observable<TigoMoneyInfo[]> {
    const data: TigoMoneyInfo[] = [
      {
        id: 2985552,
        nombreRegistrado: 'LUIS GERARDO LAINEZ ZERON',
        fechaNacimiento: '2001-05-31',
        estado: 2,
        fechaRegistroTm: '2024-07-14T14:01:52',
        fechaBajaTm: '',
        notificaciones: 'No tiene restricciones o suspensiones'
      }
    ];
    return of(data);
  }
}
