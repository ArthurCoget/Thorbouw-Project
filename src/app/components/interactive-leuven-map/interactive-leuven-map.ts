import {
  Component,
  signal,
  ElementRef,
  ViewChild,
  afterNextRender,
  ViewEncapsulation,
} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-interactive-leuven-map',
  imports: [],
  templateUrl: './interactive-leuven-map.html',
  styleUrl: './interactive-leuven-map.css',
  encapsulation: ViewEncapsulation.None,
})
export class InteractiveLeuvenMap {
  @ViewChild('mapContainer') mapContainerRef!: ElementRef<HTMLDivElement>;
  private map!: L.Map;
  zones = signal([
    { id: 1, lat: 50.8798, lng: 4.7005 },
    { id: 2, lat: 50.865, lng: 4.68 },
  ]);
  constructor() {
    afterNextRender(() => {
      this.initMap();
    });
  }
  private async initMap() {
    const leaflet = await import('leaflet');
    const container = this.mapContainerRef.nativeElement;
    if (!container.offsetWidth || !container.offsetHeight) {
      console.warn('Map container has no dimensions');
      return;
    }
    const mapBounds = leaflet.latLngBounds(
      leaflet.latLng(50.976743, 4.589639),
      leaflet.latLng(50.73879, 4.817716),
    );
    this.map = leaflet.map(this.mapContainerRef.nativeElement, {
      center: [50.8798, 4.7005],
      zoom: 13,
      minZoom: 11,
      maxZoom: 18,
      maxBounds: mapBounds,
      maxBoundsViscosity: 1.0,
      zoomControl: false,
    });
    leaflet
      .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      })
      .addTo(this.map);
    this.map.whenReady(() => {
      setTimeout(() => {
        this.map.invalidateSize();
      }, 1000);
    });

    this.addMarkers(leaflet);
  }
  private addMarkers(leaflet: typeof L): void {}
}
