import { Component, Input, OnInit } from '@angular/core';
import { getRouselById, ITextRouselContent } from '../../interfaces/itext-rousel-content';

@Component({
  selector: 'app-text-rousel',
  imports: [],
  templateUrl: './text-rousel.html',
  styleUrl: './text-rousel.css',
})
export class TextRousel implements OnInit {
  @Input()
  title?: string;
  @Input() content!: ITextRouselContent[];
  displayedItem: string | undefined;
  activeId: number | undefined;

  ngOnInit(): void {
    const randomIndex = Math.floor(Math.random() * this.content.length);
    this.displayedItem = this.content[randomIndex].description;
    this.activeId = this.content[randomIndex].id;
  }

  getDescriptionById(id: number): void {
    this.displayedItem = getRouselById(this.content, id)?.description;
    this.activeId = id;
  }
}
