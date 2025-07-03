import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClienteInfoComponent } from "./home/components/cliente-info/cliente-info.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ClienteInfoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tablas-view';
}
