import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HabilitatsDavidAlcarazComponent} from "./habilitats-david-alcaraz/habilitats-david-alcaraz.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HabilitatsDavidAlcarazComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UF4examen';
}
