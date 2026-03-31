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
    return PROJECTS.find((p) => p.slug === slug);
  }
}
