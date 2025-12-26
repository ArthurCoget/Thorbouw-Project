import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IHeroContent, ICompleteHero, isCompleteHero } from '../../interfaces/hero-content';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-top-image-component',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './hero-component.html',
  styleUrl: './hero-component.css',
})
export class HeroComponent {
  private readonly IMAGE_BASE_PATH = '/hero-images';

  @Input({ required: true }) content!: IHeroContent;

  get imageUrl(): string {
    return `${this.IMAGE_BASE_PATH}/${this.content.image}`;
  }

  get isCompleteVariant(): boolean {
    return isCompleteHero(this.content);
  }

  get completeHero(): ICompleteHero | null {
    return this.isCompleteVariant ? (this.content as ICompleteHero) : null;
  }
}
