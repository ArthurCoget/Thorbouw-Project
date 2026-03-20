import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { IHeroContent } from '../../interfaces/hero-content';
import { ABOUT_CONTENT, ABOUT_MORE_US, ABOUT_VALUES } from '../../data/about.data';
import { NgOptimizedImage } from '@angular/common';
import { TextRousel } from '../../components/text-rousel/text-rousel';
import { ITextRouselContent } from '../../interfaces/itext-rousel-content';
import { TripleTextInfo } from '../../components/triple-text-info/triple-text-info';
import { ITripleText } from '../../interfaces/itriple-text';

@Component({
  selector: 'app-about',
  imports: [HeroComponent, NgOptimizedImage, TextRousel, TripleTextInfo],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  readonly heroContent: IHeroContent = {
    variant: 'simple',
    image: 'AboutHeroPage.webp',
    altText: 'Thorbouw team working on sustainable construction project',
    title: 'Over Thorbouw',
  };

  readonly aboutContent = ABOUT_CONTENT;
  readonly aboutValues: ITextRouselContent[] = ABOUT_VALUES;
  readonly aboutMoreUs: ITripleText[] = ABOUT_MORE_US;
}
