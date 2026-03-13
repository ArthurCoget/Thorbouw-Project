import { Component, Input, OnInit } from '@angular/core';
import { getRouselById, ITextRouselContent } from '../../interfaces/itext-rousel-content';
import { NgOptimizedImage } from '@angular/common';
import { SafeValue } from '@angular/platform-browser';

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
  displayedItem: string | undefined;
  displayedSvg: string | '' = '';
  activeId: number | undefined;

  ngOnInit(): void {
    const randomIndex = Math.floor(Math.random() * this.content.length);
    this.displayedItem = this.content[randomIndex].description;
    this.activeId = this.content[randomIndex].id;
    this.displayedSvg = this.content[randomIndex].svg;
  }

  getInfoById(id: number): void {
    var info: ITextRouselContent | undefined = getRouselById(this.content, id);
    if (info != undefined) {
      this.displayedItem = info.description;
      this.displayedSvg = info.svg;
    }
    this.activeId = id;
  }
}
