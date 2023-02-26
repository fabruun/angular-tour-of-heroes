import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HeroService } from "../hero.service";
import { MessageService } from "../message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit
{
  constructor(private heroService: HeroService, private messageService: MessageService)
  {

  }
  heroes: Hero[] = [];
  selectedHero?: Hero;


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

  onSelect(hero: Hero): void
  {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  ngOnInit(): void
  {
    this.getHeroes();
  }
}
