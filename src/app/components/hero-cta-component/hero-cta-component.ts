import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-cta-component',
  imports: [RouterLink],
  templateUrl: './hero-cta-component.html',
  styleUrl: './hero-cta-component.css',
})
export class HeroCtaComponent {
  @Input({ required: true }) ctaContent!: {
    title1: string;
    subtitle1: string;
    btn1: string;
    link_btn1: string;
    title2: string;
    subtitle2: string;
    btn2: string;
    link_btn2: string;
    img: string;
    imgAlt: string;
  };
}
