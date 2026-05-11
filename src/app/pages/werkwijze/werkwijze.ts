import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { IHeroContent } from '../../interfaces/hero-content';
import { TimelineComponent } from '../../components/timeline-component/timeline-component';
import {
  TEXT_AND_IMAGE_CONTENT,
  TIMELINE_ITEMS,
  TIMELINE_TITLE_AND_DESCRIPTION_AND_BUTTON,
} from '../../data/werkwijze.data';
import { TextAndImageComponent } from '../../components/text-and-image-component/text-and-image-component';

@Component({
  selector: 'app-werkwijze',
  imports: [HeroComponent, TimelineComponent, TextAndImageComponent],
  templateUrl: './werkwijze.html',
  styleUrl: './werkwijze.css',
})
export class Werkwijze {
  readonly heroContent: IHeroContent = {
    variant: 'simple',
    image: 'WerkwijzeHero.webp',
    altText: 'Renovatie van een bewoning, buiten foto',
    title: 'Onze Werkwijze',
  };

  readonly timelineItems = TIMELINE_ITEMS;
  readonly titleAndDescriptionAndButton = TIMELINE_TITLE_AND_DESCRIPTION_AND_BUTTON;
  readonly items = TEXT_AND_IMAGE_CONTENT;
}
