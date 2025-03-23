import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calulo-matricula',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './calulo-matricula.component.html',
  styleUrl: './calulo-matricula.component.css'
})
export class CaluloMatriculaComponent {
  estrato: number = 0;
  matricula: number = 0;
  valorPagar: number = 0;

  eventClick() {
    if (this.estrato == 1) {
      this.valorPagar = this.matricula - this.matricula * 0.50;
    } else if (this.estrato == 2) {
      this.valorPagar = this.matricula - this.matricula * 0.30;
    } else if (this.estrato == 3) {
      this.valorPagar = this.matricula - this.matricula * 0.10;
    } else if (this.estrato == 4) {
      this.valorPagar = this.matricula;
    } else if (this.estrato == 5) {
      this.valorPagar = this.matricula + (this.matricula * 0.20);
    } else if (this.estrato == 6) {
      this.valorPagar = this.matricula + (this.matricula * 0.40);
    }
  }
}
