import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { IHeroContent } from '../../interfaces/hero-content';
import { TextAndImageComponent } from '../../components/text-and-image-component/text-and-image-component';
import { TextImageContent } from '../../interfaces/text-and-image-content';
import { TOP_ADVIES_TEXT } from '../../data/advies.data';

@Component({
  selector: 'app-advies',
  imports: [HeroComponent, TextAndImageComponent],
  templateUrl: './advies.html',
  styleUrl: './advies.css',
})
export class Advies {
  readonly heroContent: IHeroContent = {
    variant: 'simple',
    image: 'AdviesHero.webp',
    altText: 'Renovatie van een badkamer gedaan door Thorbouw',
    title: 'Bouwkundig Advies',
  };

  readonly topAdvies: TextImageContent = TOP_ADVIES_TEXT;
}
