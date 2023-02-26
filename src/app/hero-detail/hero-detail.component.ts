import { Component, Input } from '@angular/core';
import { Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.sass']
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
