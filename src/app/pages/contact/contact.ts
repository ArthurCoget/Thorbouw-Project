import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { CONTACT_CONTENT, CONTACT_LIST, HERO_CONTACT_CONTENT } from '../../data/contact.data';
import { InfoCard } from '../../components/info-card/info-card';

@Component({
  selector: 'app-contact',
  imports: [HeroComponent, InfoCard],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  readonly heroContent = HERO_CONTACT_CONTENT;
  readonly contactContent = CONTACT_CONTENT;
  readonly list = CONTACT_LIST;
}
