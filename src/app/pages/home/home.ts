import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { PillarsComponent } from '../../components/pillars-component/pillars-component';
import { ImageCarouselComponent } from '../../components/image-carousel-component/image-carousel-component';
import {
  HOME_HERO_CONTENT,
  HOME_PILLARS,
  CAROUSEL_IMAGES,
  HOME_CONTENT,
} from '../../data/home.data';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, PillarsComponent, ImageCarouselComponent, NgOptimizedImage],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly heroContent = HOME_HERO_CONTENT;
  readonly pillars = HOME_PILLARS;
  readonly carouselImages = CAROUSEL_IMAGES;
  readonly homeContent = HOME_CONTENT;
}
