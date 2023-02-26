import { Component } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent
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

  selectedHero?: Hero;
  onSelect(hero: Hero): void
  {
    this.selectedHero = hero;
  }

  ngOnInit(): void
  {
    this.getHeroes();
  }
}
