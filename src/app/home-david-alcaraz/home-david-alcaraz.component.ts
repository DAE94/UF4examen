import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {forkJoin, map, Observable} from "rxjs";
import {ServeiService} from "../servei.service";

@Component({
  selector: 'app-home-david-alcaraz',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './home-david-alcaraz.component.html',
  styleUrl: './home-david-alcaraz.component.css'
})
export class HomeDavidAlcarazComponent {
  IdDelPokemon :number = 0;
  imatgePokemon: string = "";
  nomPokemon: string = "";
  habilitats: { nom: string; descripcio: string }[] = [];


  constructor(private http: HttpClient, protected s : ServeiService) {}

  promesaPokemon(pokemonId: number): Promise<number> {
    return new Promise((resolve, reject) => {
      this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`).subscribe({
        next: (data) => {
          this.imatgePokemon = data.sprites.front_default;
          this.nomPokemon = data.name;
          this.s.nomPokemon = data.name;

          // obtenir habilitats
          const abilities = data.abilities;
          const abilityRequests: Observable<any>[] = abilities.map((ability: any) =>
            this.http.get<any>(ability.ability.url).pipe(
              map((abilityData) => ({
                nom: ability.ability.name,
                descripcio: abilityData.effect_entries[0].effect
              }))
            )
          );
          forkJoin(abilityRequests).subscribe((abilityDetails) => {
            this.habilitats = abilityDetails;
            this.s.habilitats = abilityDetails;
          }, error => {
            console.error('Error fetching ability details:', error);
          });

          const attackStat = data.stats.find((stat: any) => stat.stat.name === "attack");
          const attackValue = attackStat ? attackStat.base_stat : undefined;
          if (attackValue !== undefined && attackValue >= 50) {
            resolve(attackValue);
          } else {
            reject(new Error(`Promesa rebutjada! L'atac del pokemon ${pokemonId} no arriba a 50`));
          }
        },
        error: (e) => reject(e),
      });
    });
  }

  buscarPokemon(pokemonId: number) {
    this.promesaPokemon(pokemonId).then((attackValue) => {
      console.log(`Atac del pokemon: ${attackValue}`);
    }).catch((error) => {
      console.error('Error:', error.message);
    });
  }
}
