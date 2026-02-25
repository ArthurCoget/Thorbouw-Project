import { Component, SimpleChange } from '@angular/core';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { IHeroContent } from '../../interfaces/hero-content';

@Component({
  selector: 'app-contact',
  imports: [HeroComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  readonly heroContent: IHeroContent = {
    variant: 'simple',
    image: 'ContactHero.webp',
    altText: 'Thorbouw',
    title: 'Contact',
  };
}
