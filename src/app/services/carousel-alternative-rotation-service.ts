import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarouselAlternativeRotationService {
  private touchStartX = 0;
  private touchStartY = 0;

  private timeout: ReturnType<typeof setTimeout> | null = null;

  swipeStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].clientX;
    this.touchStartY = event.changedTouches[0].clientY;
  }

  swipeDetect(event: TouchEvent, threshold: number, onLeft: () => void, onRight: () => void) {
    const deltaX = event.changedTouches[0].clientX - this.touchStartX;
    const deltaY = event.changedTouches[0].clientY - this.touchStartY;

    if (Math.abs(deltaY) > Math.abs(deltaX)) return;
    if (Math.abs(deltaX) < threshold) return;

    deltaX > 0 ? onRight() : onLeft();
  }

  handleKeyEvents(event: KeyboardEvent, onRight: () => void, onLeft: () => void) {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        onLeft();
        break;

      case 'ArrowRight':
        event.preventDefault();
        onRight();
        break;

      case 'Enter':
        event.preventDefault();
        onRight();
        break;
    }
  }

  start(delay: number, onRight: () => void): void {
    this.stop();
    this.timeout = setTimeout(() => {
      onRight();
    }, delay);
  }

  stop() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }
}
