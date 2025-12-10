import {
  Component,
  signal,
  ElementRef,
  effect,
  HostListener,
  computed,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import { ICarouselImage } from '../../interfaces/carousel-image.data';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-image-carousel-component',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './image-carousel-component.html',
  styleUrl: './image-carousel-component.css',
})
export class ImageCarouselComponent implements AfterViewInit, OnDestroy {
  private readonly AUTO_SLIDE_DELAY = 8000;
  private readonly ANIMATION_DURATION = 700;
  private readonly INFO_FADE_DURATION = 350;
  private readonly INTERSECTION_THRESHOLD = 0.2;

  items = signal<ICarouselImage[]>([
    {
      id: 1,
      img: 'verbouwing-linden/VerbouwingLinden-Carousel.webp',
      title: 'Verbouwing in Linden',
      date: '06/2018',
    },
    { id: 6, img: '/placeholder/1-placeholder.webp', title: 'Garden Office', date: '05/2022' },
    { id: 2, img: '/placeholder/2-placeholder.webp', title: 'Modern Glasshouse', date: '09/2019' },
    { id: 3, img: '/placeholder/3-placeholder.webp', title: 'Classic Renovation', date: '02/2020' },
    { id: 4, img: '/placeholder/4-placeholder.webp', title: 'City Loft', date: '11/2021' },
    { id: 5, img: '/placeholder/5-placeholder.webp', title: 'Garden Office', date: '05/2022' },
  ]);

  currentIndex = signal(0);
  isVisible = signal(false);
  isAnimating = signal(false);
  isAnimatingInfo = signal(false);

  activeItem = computed(() => this.items()[this.currentIndex()]);

  private autoSlideTimeout: ReturnType<typeof setTimeout> | null = null;
  private observer?: IntersectionObserver;

  private readonly SWIPE_THRESHOLD = 50;

  private touchStartX = 0;
  private touchStartY = 0;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        this.isVisible.set(entries[0].isIntersecting);
      },
      { threshold: this.INTERSECTION_THRESHOLD }
    );

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.clearAutoSlide();
    this.observer?.disconnect();
  }

  private startAutoSlide(): void {
    this.clearAutoSlide();
    this.autoSlideTimeout = setTimeout(() => {
      this.handleSlide('next');
    }, this.AUTO_SLIDE_DELAY);
  }

  private clearAutoSlide(): void {
    if (this.autoSlideTimeout) {
      clearTimeout(this.autoSlideTimeout);
      this.autoSlideTimeout = null;
    }
  }

  private autoSlideEffect = effect((onCleanup) => {
    if (this.isVisible()) {
      this.startAutoSlide();
    }

    onCleanup(() => this.clearAutoSlide());
  });

  getItemClass(index: number): string {
    const current = this.currentIndex();
    const total = this.items().length;

    const next = (current + 1) % total;
    const prev = (current - 1 + total) % total;

    if (index === current) return 'active';
    if (index === next) return 'next';
    if (index === prev) return 'prev';

    const beforePrev = (prev - 1 + total) % total;
    return index === beforePrev ? 'hidden-prev' : 'hidden-next';
  }

  handleCardClick(index: number): void {
    if (this.isAnimating()) return;

    const itemClass = this.getItemClass(index);
    if (itemClass === 'prev') {
      this.handleSlide('prev');
    } else if (itemClass === 'next') {
      this.handleSlide('next');
    }
  }

  private handleSlide(direction: 'next' | 'prev'): void {
    if (this.isAnimating()) return;

    this.isAnimating.set(true);
    this.isAnimatingInfo.set(true);

    requestAnimationFrame(() => {
      const total = this.items().length;
      this.currentIndex.update((i) =>
        direction === 'next' ? (i + 1) % total : (i - 1 + total) % total
      );
    });

    setTimeout(() => this.isAnimatingInfo.set(false), this.INFO_FADE_DURATION);
    setTimeout(() => {
      this.isAnimating.set(false);
      this.startAutoSlide();
    }, this.ANIMATION_DURATION);
  }

  @HostListener('document:visibilitychange')
  onVisibilityChange(): void {
    if (document.hidden) {
      this.clearAutoSlide();
    } else if (this.isVisible()) {
      this.startAutoSlide();
    }
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
    this.touchStartY = event.changedTouches[0].screenY;
  }

  onTouchEnd(event: TouchEvent): void {
    if (this.isAnimating()) return;

    const touchEndX = event.changedTouches[0].screenX;
    const touchEndY = event.changedTouches[0].screenY;

    this.handleSwipeGesture(touchEndX, touchEndY);
  }

  private handleSwipeGesture(endX: number, endY: number): void {
    const deltaX = endX - this.touchStartX;
    const deltaY = endY - this.touchStartY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (Math.abs(deltaX) > this.SWIPE_THRESHOLD) {
        if (deltaX > 0) {
          this.handleSlide('prev');
        } else {
          this.handleSlide('next');
        }
      }
    }
  }
}
