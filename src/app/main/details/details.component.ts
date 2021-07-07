import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SuperheroService } from 'src/app/services/superhero.service';
import { Superhero } from 'src/app/models/superhero';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  superheroes: Superhero[] = []
  constructor(private route: ActivatedRoute, private superheroService: SuperheroService) {}

  ngOnInit(){
    this.superheroService.getSuperHeroes().subscribe(response => {
      const filter = response.filter(f=> f.id == this.route.snapshot.params.id );
      if(filter.length != 0) {
        this.superheroes.push(filter[0]);
        
      }
    } );
  }

}
