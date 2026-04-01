import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project';
import { IProjectContent, IProjectImage } from '../../interfaces/iproject-content';
import { IHeroContent } from '../../interfaces/hero-content';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { ImageCarouselComponent } from '../../components/image-carousel-component/image-carousel-component';
import { ICarouselImage } from '../../interfaces/carousel-image';
import { count } from 'console';

@Component({
  selector: 'app-project-detail',
  imports: [HeroComponent, ImageCarouselComponent],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private projectService = inject(ProjectService);

  project: IProjectContent | undefined;
  items: ICarouselImage[] = [];
  heroContent: IHeroContent = {
    variant: 'simple',
    title: '',
    image: '',
    altText: '',
  };

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.project = this.projectService.getBySlug(slug ?? '');

    if (this.project != undefined) {
      this.heroContent = {
        variant: 'simple',
        title: this.project.title,
        image: this.project.images[0].src,
        altText: this.project.images[0].alt,
      };
      var count = 0;
      this.project.images.forEach((image) => {
        this.items.push({ id: count, img: image.src, title: image.alt });
        count++;
      });
    }
  }
}
