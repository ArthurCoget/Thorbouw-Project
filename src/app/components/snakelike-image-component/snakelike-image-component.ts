import { Component, Input } from '@angular/core';
import { ISnakeItem } from '../../interfaces/snake-image-interface';

@Component({
  selector: 'app-snakelike-image-component',
  imports: [],
  templateUrl: './snakelike-image-component.html',
  styleUrl: './snakelike-image-component.css',
})
export class SnakelikeImageComponent {
  @Input({ required: true }) snakeItem!: ISnakeItem;
}
