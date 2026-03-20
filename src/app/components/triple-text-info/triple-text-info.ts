import { Component, Input } from '@angular/core';
import { ITripleText } from '../../interfaces/itriple-text';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-triple-text-info',
  imports: [NgOptimizedImage],
  templateUrl: './triple-text-info.html',
  styleUrl: './triple-text-info.css',
})
export class TripleTextInfo {
  @Input() content!: ITripleText[];
  activeId: number | undefined;

  ngOnInit(): void {
    const randomIndex = Math.floor(Math.random() * this.content.length);
    this.activeId = this.content[randomIndex].id;
  }

  getInfoById(id: number) {
    this.activeId = id;
  }
}
