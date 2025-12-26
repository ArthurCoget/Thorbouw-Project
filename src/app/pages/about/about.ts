import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { IHeroContent } from '../../interfaces/hero-content';

@Component({
  selector: 'app-about',
  imports: [HeroComponent],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  readonly heroContent: IHeroContent = {
    variant: 'simple',
    image: 'AboutHeroPage.webp',
    altText: 'Thorbouw team working on sustainable construction project',
    title: 'Over Thorbouw',
  };
}
