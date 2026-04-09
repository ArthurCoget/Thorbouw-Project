import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  viewChild,
  signal,
  inject,
  PLATFORM_ID,
  Input,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { IProjectImage } from '../../interfaces/iproject-content';

@Component({
  selector: 'app-image-gallery',
  imports: [],
  templateUrl: './image-gallery.html',
  styleUrl: './image-gallery.css',
})
export class ImageGallery implements AfterViewInit, OnDestroy {
  @Input({ required: true }) items: IProjectImage[] = [];

  private platformId = inject(PLATFORM_ID);
  private resizeObserver: ResizeObserver | null = null;

  readonly galleryRef = viewChild<ElementRef<HTMLElement>>('gallery');

  focusImageRef = viewChild<ElementRef>('focusedImage');

  activeIndex = signal<number | null>(null);

  isImageOpen = signal(false);

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupResizeObserver();
    }
  }

  private setupResizeObserver(): void {
    const galleryEl = this.galleryRef()?.nativeElement;
    if (!galleryEl) return;

    this.resizeObserver?.disconnect();
    this.resizeObserver = new ResizeObserver(() => this.fixLastRow());
    this.resizeObserver.observe(galleryEl);
    this.fixLastRow();
  }

  private fixLastRow(): void {
    const galleryEl = this.galleryRef()?.nativeElement;
    if (!galleryEl) return;

    const figures = galleryEl.querySelectorAll<HTMLElement>('.gallery-item');
    figures.forEach((fig) => fig.classList.remove('last-row'));

    let maxTop = -Infinity;
    figures.forEach((fig) => {
      const top = fig.getBoundingClientRect().top;
      if (top > maxTop) maxTop = top;
    });

    figures.forEach((fig) => {
      if (Math.round(fig.getBoundingClientRect().top) === Math.round(maxTop)) {
        fig.classList.add('last-row');
      }
    });
  }

  openImage(index: number): void {
    this.activeIndex.set(index);
    this.isImageOpen.set(true);
    setTimeout(() => {
      this.focusImageRef()?.nativeElement.focus();
    });
  }

  closeImage(): void {
    this.isImageOpen.set(false);
    this.activeIndex.set(null);
  }

  get activeItem(): IProjectImage | null {
    const index = this.activeIndex();
    return index !== null ? this.items[index] : null;
  }

  prevItem(): void {
    const current = this.activeIndex();
    if (current === null) return;
    this.activeIndex.set((current - 1 + this.items.length) % this.items.length);
  }

  nextItem(): void {
    const current = this.activeIndex();
    if (current === null) return;
    this.activeIndex.set((current + 1) % this.items.length);
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
  }
}
