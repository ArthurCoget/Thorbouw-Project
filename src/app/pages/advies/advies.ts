import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { IHeroContent } from '../../interfaces/hero-content';
import { HeroCtaComponent } from '../../components/hero-cta-component/hero-cta-component';
import { CTA_ADVIES_CONTENT } from '../../data/advies.data';

@Component({
  selector: 'app-advies',
  imports: [HeroComponent, HeroCtaComponent],
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

  readonly topAdvies = CTA_ADVIES_CONTENT;
}
