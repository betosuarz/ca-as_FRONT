import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rates',
  standalone: true,
  imports: [RouterLink, NgIf, NgClass],
  templateUrl: './rates.component.html',
  styleUrl: './rates.component.css'
})
export class RatesComponent {
  mostrarGuiadas: boolean = true;
  mostrarNoGuiadas: boolean = false;

  showGuiadas() {
    this.mostrarGuiadas = true;
    this.mostrarNoGuiadas = false
  }

  showNoGuiadas() {
    this.mostrarNoGuiadas = true;
    this.mostrarGuiadas = false
  }
}
