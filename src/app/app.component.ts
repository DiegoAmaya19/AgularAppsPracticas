import { Component} from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = "Primer App"
  classMenu = "menuDesplegable";
  classButtonMenu = "icon";

  openMenu() {
    this.classMenu = "menuDesplegado";
  }

  closeMenu() {
    this.classMenu = "menuDesplegable";
  }

}

