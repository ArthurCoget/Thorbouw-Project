import { Component, ElementRef, viewChild, signal, AfterViewInit } from '@angular/core';
import { IProjectImage } from '../../interfaces/iproject-content';

@Component({
  selector: 'app-image-gallery',
  imports: [],
  templateUrl: './image-gallery.html',
  styleUrl: './image-gallery.css',
})
export class ImageGallery {
  focusImageRef = viewChild<ElementRef>('focusedImage');

  readonly items: IProjectImage[] = [
    {
      src: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=1200&q=80',
      alt: 'Alpine peaks rising above the clouds',
    },
    {
      src: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80',
      alt: 'Classic automobile on an empty road',
      title: 'Open Road',
      category: 'Automobile',
      description: 'The freedom of the asphalt horizon',
    },
    {
      src: 'https://images.unsplash.com/photo-1466970601638-4e5fb6556584?w=1200&q=80',
      alt: 'Misty mountain valley at dawn',
      title: 'Morning Veil',
      category: 'Mountains',
      description: 'Dawn breaks over the ancient valley',
    },
    {
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1200&q=80',
      alt: 'Deer standing in a meadow',
      title: 'Still Presence',
      category: 'Wildlife',
      description: 'A moment held in amber light',
    },
    {
      src: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1200&q=80',
      alt: 'Vintage bicycle against a wall',
      title: 'Au Revoir',
      category: 'Lifestyle',
      description: 'Resting between journeys',
    },
    {
      src: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=1200&q=80',
      alt: 'Minimal workspace with laptop',
    },
    {
      src: 'https://images.unsplash.com/photo-1532103054090-3491f1a05d0d?w=1200&q=80',
      alt: 'Abstract office architecture',
      title: 'Geometry',
      category: 'Architecture',
      description: 'Lines that define the modern age',
    },
    {
      src: 'https://images.unsplash.com/photo-1599033153041-e88627ca70bb?w=1200&q=80',
      alt: 'City skyline at dusk',
    },
    {
      src: 'https://images.unsplash.com/photo-1507097634215-e82e6b518529?w=1200&q=80',
      alt: 'Aerial city view at night',
    },
    {
      src: 'https://images.unsplash.com/photo-1528988719300-046ff7faf8cb?w=1200&q=80',
      alt: 'Snow-capped mountain range',
      title: 'First Light',
      category: 'Mountains',
      description: 'Untouched by time or tide',
    },
    {
      src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200&q=80',
      alt: 'Ocean wave crashing on shore',
      title: 'The Shore',
      category: 'Ocean',
      description: 'Between the land and the infinite',
    },
    {
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80',
      alt: 'Lake reflecting the mountains',
      title: 'Mirror Lake',
      category: 'Mountains',
      description: "Nature's perfect symmetry",
    },
  ];

  activeIndex = signal<number | null>(null);

  isImageOpen = signal(false);

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
}
