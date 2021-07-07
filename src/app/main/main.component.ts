import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { makeStateKey } from '@angular/platform-browser';
import { Superhero } from '../models/superhero';
import { SuperheroService } from '../services/superhero.service';
const STATE_KEY_ITEMS = makeStateKey('superheroes');

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  loaded: boolean;

  search: string;
  superheroes: Superhero[] = []
  constructor(private superheroService: SuperheroService, @Inject(PLATFORM_ID) private platformId: Object,
  @Inject(APP_ID) private appId: string ) { 
    this.search = "";
    this.loaded = false;
  }

  ngOnInit() {
    this.superheroService.getSuperHeroes().subscribe(response => 
        {
          for(let i = 0; i<20; i++) {    
            this.superheroes.push(response[i])
          }

          // const platform = isPlatformBrowser(this.platformId) ?
          //   'in the browser' : 'on the server';
          // console.log(`getUsers : Running ${platform} with appId=${this.appId}`);
          // this.loaded = true;
        }
      );
  }

  // resetSuperHeroes(): void {
  //   this.superheroes = [];
  //   this.loaded = true;
  // }

}
