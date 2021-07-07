import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Superhero } from '../models/superhero';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {
  
  private URL = "https://akabab.github.io/superhero-api/api/all.json";
  constructor(private http: HttpClient) { }

  public getSuperHeroes(): Observable<Superhero[]> {
    return this.http.get<Superhero[]>(this.URL);
  }

}
