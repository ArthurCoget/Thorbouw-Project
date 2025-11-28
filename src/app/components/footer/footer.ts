import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  footerImages = [
    'FooterImage1.webp',
    'FooterImage2.webp',
    'FooterImage3.webp',
    'FooterImage4.webp',
  ];

  nextImage: string | null = null;
  currentImage = '/footer/FooterImage1.webp';

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.nextImage) {
          this.currentImage = this.nextImage;
          this.preloadNextImage();
        } else {
          this.pickRandomImage();
        }
      }
    });
  }

  pickRandomImage() {
    if (isPlatformBrowser(this.platformId)) {
      const index = Math.floor(Math.random() * this.footerImages.length);
      const imageName = this.footerImages[index];

      const url = `/footer/${imageName}`;

      this.loadImage(url);
    }
  }

  loadImage(url: string) {
    const img = new Image();
    img.src = url;

    img.onload = () => {
      this.currentImage = url;
      this.preloadNextImage();
    };
  }

  preloadNextImage() {
    let index: number;
    let nextUrl: string;

    do {
      index = Math.floor(Math.random() * this.footerImages.length);
      const fileName = this.footerImages[index];
      nextUrl = `/footer/${fileName}`;
    } while (nextUrl === this.currentImage && this.footerImages.length > 1);

    const img = new Image();
    img.src = nextUrl;

    img.onload = () => {
      this.nextImage = nextUrl;
    };
  }
}
