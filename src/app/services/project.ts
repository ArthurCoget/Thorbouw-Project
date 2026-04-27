import { Injectable } from '@angular/core';
import { PROJECTS } from '../data/projects.data';
import { IProjectContent } from '../interfaces/iproject-content';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  getAll(): IProjectContent[] {
    return PROJECTS;
  }

  getBySlug(slug: string): IProjectContent | undefined {
    return this.getAll().find((p) => p.slug === slug);
  }

  getAllCoords(): { coords: [number, number]; slug: string }[] {
    return this.getAll().map((p) => ({ coords: p.locationCoord, slug: p.slug }));
  }
}
