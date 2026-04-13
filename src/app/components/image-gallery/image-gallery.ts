import {
  Component,
  ElementRef,
  OnDestroy,
  viewChild,
  signal,
  inject,
  PLATFORM_ID,
  input,
  ChangeDetectionStrategy,
  computed,
  effect,
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
export class ImageGallery implements OnDestroy {
  items = input.required<IProjectImage[]>();

  private platformId = inject(PLATFORM_ID);
  private document = inject(DOCUMENT);
  private alternativeRotator = inject(CarouselAlternativeRotationService);

  private readonly SWIPE_THRESHOLD = 50;
  private readonly galleryRef = viewChild<ElementRef<HTMLDivElement>>('gallery');
  private readonly focusImageRef = viewChild<ElementRef<HTMLDivElement>>('focusedImage');

  private resizeObserver: ResizeObserver | null = null;
  private preventTouchMove = (e: TouchEvent) => e.preventDefault();
  private focusTimeoutId: ReturnType<typeof setTimeout> | null = null;
  private resizeDebounceId: ReturnType<typeof requestAnimationFrame> | null = null;

  activeIndex = signal<number | null>(null);
  isImageOpen = signal(false);

  constructor() {
    effect(() => {
      const galleryEl = this.galleryRef()?.nativeElement;
      if (!galleryEl || !isPlatformBrowser(this.platformId)) return;

      this.resizeObserver?.disconnect();
      this.resizeObserver = new ResizeObserver(() => this.fixLastRowDebounced());
      this.resizeObserver.observe(galleryEl);
      this.fixLastRow();
    });
  }

  private fixLastRow(): void {
    const galleryEl = this.galleryRef()?.nativeElement;
    if (!galleryEl || !isPlatformBrowser(this.platformId)) return;

    const figures = Array.from(galleryEl.querySelectorAll<HTMLElement>('.gallery-item'));
    figures.forEach((fig) => {
      fig.classList.remove('last-row');
      fig.classList.remove('last-column');
    });
    if (figures.length === 0) return;

    const columnCount = window
      .getComputedStyle(galleryEl)
      .getPropertyValue('grid-template-columns')
      .split(' ').length;

    let rowCount = window
      .getComputedStyle(galleryEl)
      .getPropertyValue('grid-template-rows')
      .split(' ').length;

    let totalBlocks = this.calculateBlocsInGrid(figures.length);

    const lastRowHasVerticalItem = this.lastRowHasVerticalItem(
      figures.length,
      rowCount,
      columnCount,
      totalBlocks,
    );

    if (lastRowHasVerticalItem) {
      totalBlocks -= 1;
      rowCount -= 1;
    }

    const lastRowHasHorizontalItem = this.lastRowHasHorizontalItem(
      figures.length,
      columnCount,
      rowCount,
      totalBlocks,
    );

    let elementsInLastRow = this.countElementsInLastRow(
      totalBlocks,
      columnCount,
      rowCount,
      lastRowHasHorizontalItem,
    );

    if (elementsInLastRow === 99) {
      figures.at(-1)?.classList.add('last-column');
      elementsInLastRow = 3;
    }

    if (!lastRowHasVerticalItem && elementsInLastRow != 1) {
      elementsInLastRow -= 1;
    }

    figures.slice(-elementsInLastRow).forEach((fig) => fig.classList.add('last-row'));
  }

  ngOnDestroy(): void {
    if (this.resizeDebounceId !== null) cancelAnimationFrame(this.resizeDebounceId);
    this.resizeObserver?.disconnect();
    this.resizeObserver = null;
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
    if (this.focusTimeoutId !== null) clearTimeout(this.focusTimeoutId);
    this.focusTimeoutId = setTimeout(() => this.focusImageRef()?.nativeElement.focus());
  }

  closeImage(): void {
    this.isImageOpen.set(false);
    this.activeIndex.set(null);
    this.cleanUpEventListeners();
  }

  activeItem = computed(() => {
    const index = this.activeIndex();
    return index !== null ? this.items()[index] : null;
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

  private calculateBlocsInGrid(numberOfElements: number): number {
    if (numberOfElements <= 4) {
      return [4, 6, 7, 8][numberOfElements - 1];
    }
    const n2 = numberOfElements - 4;
    const k = Math.floor(n2 / 4);
    const r = n2 % 4;

    const rest = [0, 2, 4, 5];

    return 8 + 6 * k + rest[r];
  }

  private lastRowHasVerticalItem(
    numberOfElements: number,
    rows: number,
    columns: number,
    blocks: number,
  ): boolean {
    if (Number.isInteger((numberOfElements - 1) / 4)) return true;
    const totalCells = columns * (rows - 1);
    if (blocks >= totalCells) {
      return false;
    }
    return true;
  }

  private lastRowHasHorizontalItem(
    numberOfElements: number,
    columns: number,
    rows: number,
    blocks: number,
  ): boolean {
    const totalCellsMinusLastRow = columns * (rows - 1);
    const lastRowBlocks = blocks - totalCellsMinusLastRow;
    for (let i = 0; i < lastRowBlocks; i++) {
      if (Number.isInteger((numberOfElements - i - 2) / 4)) {
        return true;
      }
    }
    return false;
  }

  private countElementsInLastRow(
    numberOfBlocks: number,
    columns: number,
    rows: number,
    horizontal: boolean,
  ): number {
    const totalCells = columns * rows;
    const emptyCells = totalCells - numberOfBlocks;
    const numberOfElementsInLastRow = columns - emptyCells;
    if (numberOfElementsInLastRow === 0) {
      return 99;
    }
    return horizontal ? numberOfElementsInLastRow - 1 : numberOfElementsInLastRow;
  }

  private fixLastRowDebounced = (): void => {
    if (this.resizeDebounceId !== null) cancelAnimationFrame(this.resizeDebounceId);
    this.resizeDebounceId = requestAnimationFrame(() => this.fixLastRow());
  };
}
