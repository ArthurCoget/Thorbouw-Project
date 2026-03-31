import { Component, Input } from '@angular/core';
import { IProjectContent } from '../../interfaces/iproject-content';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-foto-card',
  imports: [RouterLink],
  templateUrl: './foto-card.html',
  styleUrl: './foto-card.css',
})
export class FotoCard {
  @Input({ required: true }) project!: IProjectContent;
}
