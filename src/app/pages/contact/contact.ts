import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { CONTACT_CONTENT, HERO_CONTACT_CONTENT } from '../../data/contact.data';
import { ContactCard } from '../../components/contact-card/contact-card';

@Component({
  selector: 'app-contact',
  imports: [HeroComponent, ContactCard],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  readonly heroContent = HERO_CONTACT_CONTENT;
  readonly contactContent = CONTACT_CONTENT;

  readonly list = [1, 2, 3, 4, 5];
}
