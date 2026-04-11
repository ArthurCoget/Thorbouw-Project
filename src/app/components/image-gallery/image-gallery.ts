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
  ChangeDetectionStrategy,
  computed,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { IProjectImage } from '../../interfaces/iproject-content';
import { CarouselAlternativeRotationService } from '../../services/carousel-alternative-rotation-service';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-image-gallery',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './image-gallery.html',
  styleUrl: './image-gallery.css',
})
export class ImageGallery implements AfterViewInit, OnDestroy {
  @Input({ required: true }) items: IProjectImage[] = [];

  private platformId = inject(PLATFORM_ID);
  private document = inject(DOCUMENT);
  private alternativeRotator = inject(CarouselAlternativeRotationService);

  private readonly SWIPE_THRESHOLD = 50;
  private readonly galleryRef = viewChild<ElementRef<HTMLDivElement>>('gallery');
  private readonly focusImageRef = viewChild<ElementRef<HTMLDivElement>>('focusedImage');

  private resizeObserver: ResizeObserver | null = null;
  private preventTouchMove = (e: TouchEvent) => e.preventDefault();
  private focusTimeoutId: ReturnType<typeof setTimeout> | null = null;

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

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
    this.cleanUpEventListeners();
  }

  openImage(index: number): void {
    this.activeIndex.set(index);
    this.isImageOpen.set(true);

    if (isPlatformBrowser(this.platformId)) {
      this.document.body.style.overflow = 'hidden';
      this.document.documentElement.style.overflow = 'hidden';
      this.document.addEventListener('touchmove', this.preventTouchMove, { passive: false });
    }

    this.focusTimeoutId = setTimeout(() => this.focusImageRef()?.nativeElement.focus());
  }

  closeImage(): void {
    this.isImageOpen.set(false);
    this.activeIndex.set(null);
    this.cleanUpEventListeners();
  }

  activeItem = computed(() => {
    const index = this.activeIndex();
    return index !== null ? this.items[index] : null;
  });

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

  onTouchStart(e: TouchEvent) {
    this.alternativeRotator.swipeStart(e);
  }

  onTouchEnd(e: TouchEvent) {
    this.alternativeRotator.swipeDetect(
      e,
      this.SWIPE_THRESHOLD,
      () => this.nextItem(),
      () => this.prevItem(),
    );
  }

  onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      this.closeImage();
      return;
    }
    this.alternativeRotator.handleKeyEvents(
      e,
      () => this.nextItem(),
      () => this.prevItem(),
    );
  }

  private cleanUpEventListeners(): void {
    if (this.focusTimeoutId !== null) clearTimeout(this.focusTimeoutId);

    if (isPlatformBrowser(this.platformId)) {
      this.document.body.style.overflow = '';
      this.document.documentElement.style.overflow = '';
      this.document.removeEventListener('touchmove', this.preventTouchMove);
    }
  }
}
