import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IHeroContent } from '../../interfaces/hero-content';
import { HeroComponent } from '../../components/hero-component/hero-component';

@Component({
  selector: 'app-sitemap',
  imports: [RouterLink, HeroComponent],
  templateUrl: './sitemap.html',
  styleUrl: './sitemap.css',
})
export class Sitemap {
  readonly heroContent: IHeroContent = {
    variant: 'simple',
    image: 'AboutHeroPage.webp',
    altText: 'Thorbouw team working on sustainable construction project',
    title: 'Sitemap',
  };
}
