import {
  Component,
  ElementRef,
  ViewChild,
  afterNextRender,
  ViewEncapsulation,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { LngLatBounds } from 'maplibre-gl';

@Component({
  selector: 'app-interactive-leuven-map',
  imports: [],
  templateUrl: './interactive-leuven-map.html',
  styleUrl: './interactive-leuven-map.css',
  encapsulation: ViewEncapsulation.None,
})
export class InteractiveLeuvenMap implements OnChanges {
  @ViewChild('mapContainer') mapContainerRef!: ElementRef<HTMLDivElement>;

  @Input('mapCenter') mapCenter?: [number, number] = [4.7005, 50.8798];
  @Input('zones') zones?: { coords: [number, number]; slug: string }[];

  private map: any;
  private maplibregl: any;
  private markers: any[] = [];

  constructor(private router: Router) {
    afterNextRender(() => {
      this.initMap();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.map) return;

    if (changes['mapCenter'] || changes['zones']) {
      this.clearMarkers();
      this.map.flyTo({ center: this.mapCenter, zoom: 13 });
      this.addMarkers(this.maplibregl);
    }
  }

  private async initMap() {
    this.maplibregl = (await import('maplibre-gl')).default;

    const maxBounds = new LngLatBounds(
      [4.418231, 50.7366], // Southwest coordinates
      [5.101988, 50.991537], // Northeast coordinates
    );

    this.map = new this.maplibregl.Map({
      container: this.mapContainerRef.nativeElement,
      style: {
        version: 8,
        sources: {
          osm: {
            type: 'raster',
            tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
            tileSize: 256,
            attribution: '© OpenStreetMap contributors',
          },
        },
        layers: [
          {
            id: 'osm-layer',
            type: 'raster',
            source: 'osm',
            minzoom: 0,
            maxzoom: 19,
          },
        ],
      },
      center: this.mapCenter,
      zoom: 13,
      minZoom: 7,
      maxZoom: 16,
      maxBounds: maxBounds,
      touchPitch: false,
    });

    this.map.addControl(new this.maplibregl.NavigationControl({ showCompass: false }), 'top-right');

    console.log(this.zones);

    this.addMarkers(this.maplibregl);
  }

  private clearMarkers(): void {
    this.markers.forEach((marker) => marker.remove());
    this.markers = [];
  }

  private addMarkers(maplibregl: any): void {
    if (!this.zones) return;

    this.zones.forEach((zone) => {
      const link = document.createElement('a');
      link.href = `/fotos/${zone.slug}`;

      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.router.navigate(['/fotos', zone.slug]);
      });

      const el = document.createElement('img');
      el.src = zone.coords === this.mapCenter ? 'SVGs/active_map_flag.svg' : 'SVGs/map_flag.svg';
      el.style.width = '35px';
      el.style.height = '35px';
      el.style.cursor = 'pointer';

      link.appendChild(el);

      const marker = new maplibregl.Marker({ element: link })
        .setLngLat(zone.coords)
        .addTo(this.map);

      this.markers.push(marker);
    });
  }
}
