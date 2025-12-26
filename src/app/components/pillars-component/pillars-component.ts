import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IPillar } from '../../interfaces/pillar';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-pillars-component',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './pillars-component.html',
  styleUrl: './pillars-component.css',
})
export class PillarsComponent {
  @Input({ required: true })
  pillars!: IPillar[];

  @Input()
  title?: string;
}
