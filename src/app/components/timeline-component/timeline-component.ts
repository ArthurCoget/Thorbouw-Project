import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-timeline-component',
  imports: [RouterLink],
  templateUrl: './timeline-component.html',
  styleUrl: './timeline-component.css',
})
export class TimelineComponent {
  @Input({ required: true }) titleAndDescriptionAndButton!: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    buttonFragment: string;
  };

  @Input({ required: true }) items!: {
    title: string;
    description: string;
    link: string;
    fragment: string;
  }[];
}
