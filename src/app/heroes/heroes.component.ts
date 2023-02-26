import { Component } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HEROES } from '../../app/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent
{
  heroes: Hero[] = HEROES;
  selectedHero?: Hero;
  onSelect(hero: Hero): void
  {
    this.selectedHero = hero;
  }
}
