import {
  Component,
  signal,
  ElementRef,
  effect,
  computed,
  OnDestroy,
  Inject,
  PLATFORM_ID,
  input,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { ICarouselImage } from '../../interfaces/carousel-image';
import { CommonModule, NgOptimizedImage, isPlatformBrowser } from '@angular/common';
import { CarouselAlternativeRotationService } from '../../services/carousel-alternative-rotation-service';

@Component({
  selector: 'app-image-carousel-component',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './image-carousel-component.html',
  styleUrl: './image-carousel-component.css',
})
export class ImageCarouselComponent implements OnDestroy, AfterViewInit {
  private readonly SWIPE_THRESHOLD = 50;

  private readonly AUTO_SLIDE_DELAY = 8000;
  private readonly ANIMATION_DURATION = 700;
  private readonly INFO_FADE_DURATION = 350;
  private readonly INTERSECTION_THRESHOLD = 0.2;

  items = input.required<ICarouselImage[]>();
  showInfo = input(true);
  firstInfoCard = input('Datum');
  secondInfoCard = input('Project');
  buttonInfo = input('Meer Info');

  currentIndex = signal(0);
  isVisible = signal(false);
  isAnimating = signal(false);
  isAnimatingInfo = signal(false);

  activeItem = computed(() => (this.items().length ? this.items()[this.currentIndex()] : null));

  private observer?: IntersectionObserver;

  constructor(
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
    private alternativeRotator: CarouselAlternativeRotationService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        this.isVisible.set(isIntersecting);

        if (isIntersecting) {
          this.startAutoSlide();
        } else {
          this.clearAutoSlide();
        }
        this.cdr.markForCheck();
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
    this.alternativeRotator.start(this.AUTO_SLIDE_DELAY, () => this.handleSlide('next'));
  }

  private clearAutoSlide(): void {
    this.alternativeRotator.stop();
  }

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

  onTouchStart(e: TouchEvent) {
    this.alternativeRotator.swipeStart(e);
  }

  onTouchEnd(e: TouchEvent) {
    this.alternativeRotator.swipeDetect(
      e,
      this.SWIPE_THRESHOLD,
      () => this.handleSlide('next'),
      () => this.handleSlide('prev')
    );
  }

  onKeydown(e: KeyboardEvent) {
    this.alternativeRotator.handleKeyEvents(
      e,
      () => this.handleSlide('next'),
      () => this.handleSlide('prev')
    );
  }
}
