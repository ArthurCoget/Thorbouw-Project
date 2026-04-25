import { Component, signal, ElementRef, ViewChild, afterNextRender } from '@angular/core';
import { zoom, ZoomBehavior, ZoomTransform } from 'd3-zoom';
import { select } from 'd3-selection';

@Component({
  selector: 'app-interactive-leuven-map',
  imports: [],
  templateUrl: './interactive-leuven-map.html',
  styleUrl: './interactive-leuven-map.css',
})
export class InteractiveLeuvenMap {
  @ViewChild('container') containerRef!: ElementRef<HTMLDivElement>;
  @ViewChild('zoomWrapper') zoomRef!: ElementRef<HTMLDivElement>;

  constructor() {
    afterNextRender(() => this.initZoom());
  }

  private initZoom(): void {
    const container = select<HTMLDivElement, unknown>(this.containerRef.nativeElement);
    const zoomWrapper = this.zoomRef.nativeElement;

    const zoomBehavior: ZoomBehavior<HTMLDivElement, unknown> = zoom<HTMLDivElement, unknown>()
      .scaleExtent([1, 8])
      .translateExtent([
        [0, 0],
        [zoomWrapper.offsetWidth, zoomWrapper.offsetHeight],
      ])
      .on('zoom', (event: { transform: ZoomTransform }) => {
        const { x, y, k } = event.transform;
        zoomWrapper.style.transformOrigin = '0 0';
        zoomWrapper.style.transform = `translate(${x}px, ${y}px) scale(${k})`;
      });

    container.call(zoomBehavior);
  }

  zones = signal([
    { id: 1, x: 10, y: 20 },
    { id: 2, x: 50, y: 40 },
  ]);
}
