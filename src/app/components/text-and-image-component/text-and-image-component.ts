import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { TextImageContent } from '../../interfaces/text-and-image-content';

@Component({
  selector: 'app-text-and-image-component',
  imports: [],
  templateUrl: './text-and-image-component.html',
  styleUrl: './text-and-image-component.css',
})
export class TextAndImageComponent {
  @Input({ required: true }) content!: TextImageContent;
  @Input() reverse = false;
  @Input() light = false;
}
