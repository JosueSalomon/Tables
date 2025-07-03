import {  Component } from '@angular/core';
import { ClienteInfo } from '../../interfaces/cliente-Info.interface';
import { ClienteInfoService } from '../../services/cliente-info.service';


@Component({
  selector: 'cliente-info',
  imports: [],
  templateUrl: './cliente-info.component.html',
})
export class ClienteInfoComponent {

  clienteInfo: ClienteInfo[] = [];

  constructor(private clienteInfoService: ClienteInfoService) {}

  ngOnInit(): void {
    this.obtenerClienteInfo();
  }

  obtenerClienteInfo(): void {
    this.clienteInfoService.getClienteInfo().subscribe(data => {
      this.clienteInfo = data;
      console.log('Cliente info cargado:', this.clienteInfo);
    });
  }
}
