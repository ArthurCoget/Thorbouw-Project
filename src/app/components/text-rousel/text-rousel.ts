import { Component, Input, OnInit } from '@angular/core';
import { ITextRouselContent } from '../../interfaces/itext-rousel-content';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-text-rousel',
  imports: [NgOptimizedImage],
  templateUrl: './text-rousel.html',
  styleUrl: './text-rousel.css',
})
export class TextRousel implements OnInit {
  @Input()
  title?: string;
  @Input() content!: ITextRouselContent[];
  activeId: number | undefined;

  ngOnInit(): void {
    const randomIndex = Math.floor(Math.random() * this.content.length);
    this.activeId = this.content[randomIndex].id;
  }

  getInfoById(id: number) {
    this.activeId = id;
  }
}
