import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServeiService {
  nomPokemon: string = "";
  habilitats: { nom: string; descripcio: string }[] = [];
  constructor() { }
}
