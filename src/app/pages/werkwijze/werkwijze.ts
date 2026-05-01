import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { IHeroContent } from '../../interfaces/hero-content';
import { TimelineComponent } from '../../components/timeline-component/timeline-component';
import {
  TIMELINE_ITEMS,
  TIMELINE_TITLE_AND_DESCRIPTION_AND_BUTTON,
} from '../../data/werkwijze.data';

@Component({
  selector: 'app-werkwijze',
  imports: [HeroComponent, TimelineComponent],
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
}
