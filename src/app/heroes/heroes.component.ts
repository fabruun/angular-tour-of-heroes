import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit
{
  constructor(private heroService: HeroService)
  {

  }
  heroes: Hero[] = [];

  getHeroes(): void
  {
    this
      .heroService
      .getHeroes()
      .subscribe(
        heroes =>
          this.heroes = heroes
      );
  }

  ngOnInit(): void
  {
    this.getHeroes();
  }
}
