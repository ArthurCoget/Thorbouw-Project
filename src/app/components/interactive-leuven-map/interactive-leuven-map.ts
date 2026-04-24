import { Component, signal } from '@angular/core';
import { zoom } from 'd3-zoom';

@Component({
  selector: 'app-interactive-leuven-map',
  imports: [],
  templateUrl: './interactive-leuven-map.html',
  styleUrl: './interactive-leuven-map.css',
})
export class InteractiveLeuvenMap {
  zones = signal([
    { id: 1, x: 10, y: 20 },
    { id: 2, x: 50, y: 40 },
  ]);
}
