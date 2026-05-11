import { Component, inject } from '@angular/core';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { IHeroContent } from '../../interfaces/hero-content';
import { HeroCtaComponent } from '../../components/hero-cta-component/hero-cta-component';
import {
  ADVIES_SNAKE_CONTENT,
  ADVIES_SNAKE_IMAGES,
  CTA_ADVIES_CONTENT,
} from '../../data/advies.data';
import { SnakelikeImageComponent } from '../../components/snakelike-image-component/snakelike-image-component';
import { ISnakeContent, ISnakeImage } from '../../interfaces/snake-image-interface';
import { SnakeService } from '../../services/snake-service';

@Component({
  selector: 'app-advies',
  imports: [HeroComponent, HeroCtaComponent, SnakelikeImageComponent],
  templateUrl: './advies.html',
  styleUrl: './advies.css',
})
export class Advies {
  protected snakeService = inject(SnakeService);

  readonly heroContent: IHeroContent = {
    variant: 'simple',
    image: 'AdviesHero.webp',
    altText: 'Renovatie van een badkamer gedaan door Thorbouw',
    title: 'Bouwkundig Advies',
  };

  readonly topAdvies = CTA_ADVIES_CONTENT;

  private readonly images: ISnakeImage[] = ADVIES_SNAKE_IMAGES;

  private readonly textBlocks: ISnakeContent[] = ADVIES_SNAKE_CONTENT;
  readonly snakeItems = this.snakeService.snakeBuilder(this.images, this.textBlocks);
}
