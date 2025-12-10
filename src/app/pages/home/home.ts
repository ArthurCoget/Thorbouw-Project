import { Component } from '@angular/core';
import { TopImageComponent } from '../../components/top-image-component/top-image-component';
import { ThreeImagesComponent } from '../../components/three-images-component/three-images-component';
import { ImageCarouselComponent } from '../../components/image-carousel-component/image-carousel-component';

@Component({
  selector: 'app-home',
  imports: [TopImageComponent, ThreeImagesComponent, ImageCarouselComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
