import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectService } from '../../services/project';
import { IProjectContent, IProjectImage } from '../../interfaces/iproject-content';
import { IHeroContent } from '../../interfaces/hero-content';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { ImageCarouselComponent } from '../../components/image-carousel-component/image-carousel-component';
import { ICarouselImage } from '../../interfaces/carousel-image';
import { ImageGallery } from '../../components/image-gallery/image-gallery';
import { InteractiveLeuvenMap } from '../../components/interactive-leuven-map/interactive-leuven-map';

@Component({
  selector: 'app-project-detail',
  imports: [HeroComponent, ImageCarouselComponent, RouterLink, ImageGallery, InteractiveLeuvenMap],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private projectService = inject(ProjectService);

  project: IProjectContent | undefined;
  carouselImages: ICarouselImage[] = [];
  images: IProjectImage[] = [];
  heroContent: IHeroContent = {
    variant: 'simple',
    title: '',
    image: '',
    altText: '',
  };

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.project = this.projectService.getBySlug(slug ?? '');

    if (this.project) {
      this.heroContent = {
        variant: 'simple',
        title: this.project.title,
        image: this.project.images[0].src,
        altText: this.project.images[0].alt,
      };
      this.carouselImages = this.project.images.map((image, index) => ({
        id: index,
        img: image.src,
        title: image.alt,
      }));
      this.images = this.project.images;
    }
  }

  readonly DETAILS_CONTENT = {
    galleryTitle: 'Overzicht van alle afbeeldingen van dit project',
    mapTitile: 'Kaart met al onze projecten',
  };
}
