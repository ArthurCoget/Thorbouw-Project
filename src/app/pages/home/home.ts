import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { PillarsComponent } from '../../components/pillars-component/pillars-component';
import { ImageCarouselComponent } from '../../components/image-carousel-component/image-carousel-component';
import { HOME_HERO_CONTENT, HOME_PILLARS, HOME_CONTENT } from '../../data/home.data';
import { NgOptimizedImage } from '@angular/common';
import { PROJECTS } from '../../data/projects.data';
import { ICarouselImage } from '../../interfaces/carousel-image';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, PillarsComponent, ImageCarouselComponent, NgOptimizedImage],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly heroContent = HOME_HERO_CONTENT;
  readonly pillars = HOME_PILLARS;
  readonly homeContent = HOME_CONTENT;
  readonly projects = PROJECTS;
  readonly carouselImages = this.setupCarouselImages();

  private setupCarouselImages(): ICarouselImage[] {
    return this.projects.map((project, index) => ({
      id: index + 1,
      img: project.images[0].src,
      title: project.title,
      date: project.year.toString(),
      slug: project.slug,
    }));
  }
}
