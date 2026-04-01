import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project';
import { IProjectContent } from '../../interfaces/iproject-content';
import { IHeroContent } from '../../interfaces/hero-content';
import { HeroComponent } from '../../components/hero-component/hero-component';

@Component({
  selector: 'app-project-detail',
  imports: [HeroComponent],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css',
})
export class ProjectDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private projectService = inject(ProjectService);

  project: IProjectContent | undefined;
  selectedImage: string = '';
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
        title: this.project?.title,
        image: this.project?.images[0].src,
        altText: this.project?.images[0].alt,
      };
    }
  }
}
