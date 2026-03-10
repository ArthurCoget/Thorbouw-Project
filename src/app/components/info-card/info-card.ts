import { Component, Input } from '@angular/core';
import { IInfoContent } from '../../interfaces/info-content';

@Component({
  selector: 'app-info-card',
  imports: [],
  templateUrl: './info-card.html',
  styleUrl: './info-card.css',
})
export class InfoCard {
  @Input({ required: true }) content!: IInfoContent;
}
