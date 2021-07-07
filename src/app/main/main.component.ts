import { Component, OnInit } from '@angular/core';
import { Superhero } from '../models/superhero';
import { SuperheroService } from '../services/superhero.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // superheroes: Superhero = {id: 0, name: "", intelligence: 0, speed: 0, power: 0, gender: "", race: "", image: "" };
  superheroes: Superhero[] = []
  constructor(private superheroService: SuperheroService) { 

  }

  ngOnInit() {
    // console.log(this.superheroService.getSuperHeroes());
    this.superheroService.getSuperHeroes().subscribe(response => 
        {
          for(let i = 0; i<20; i++) {    
            this.superheroes.push(response[i])
          }
        }
      );
  }

}
