import {Component, Input} from '@angular/core';
import {ServeiService} from "../servei.service";

@Component({
  selector: 'app-habilitats-david-alcaraz',
  standalone: true,
  imports: [],
  templateUrl: './habilitats-david-alcaraz.component.html',
  styleUrl: './habilitats-david-alcaraz.component.css'
})
export class HabilitatsDavidAlcarazComponent {
  i_nomPokemon: string = "";
  i_habilitats: { nom: string; descripcio: string }[] = [];

  constructor(servei : ServeiService) {
    this.i_nomPokemon = servei.nomPokemon;
    this.i_habilitats = servei.habilitats;


  }

}
