import { Component } from '@angular/core';
import { TopImageComponent } from '../../components/top-image-component/top-image-component';
import { PillarsComponent } from '../../components/pillars-component/pillars-component';
import { ImageCarouselComponent } from '../../components/image-carousel-component/image-carousel-component';
import { IPillar } from '../../interfaces/pillar.data';

@Component({
  selector: 'app-home',
  imports: [TopImageComponent, PillarsComponent, ImageCarouselComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  homePillars: IPillar[] = [
    {
      id: '1',
      title: 'Duurzaam Wonen',
      description:
        'Uw huis omtoveren tot energiezuinige thuis? Toekomstgericht bouwen? Kleiner wonen? Thorbouw is gespecialiseerd in volhoudbaar (ver)bouwen & inrichten.',
      imageSrc: '/three-images/Three-Image-2.webp',
      link: '/projectontwikkeling',
      linkText: 'Investeer in milieubewust wonen',
    },
    {
      id: '2',
      title: 'Projectontwikkeling',
      description:
        'Leegstaand pand of een stuk grond te verkavelen? Zin in cohousing of samenhuizen? Thorbouw zet zijn schouders onder uw vooruitstrevend bouwproject.',
      imageSrc: '/three-images/Three-Image-1.webp',
      link: '/projectontwikkeling',
      linkText: 'Maak kennis met onze projectaanpak',
    },
    {
      id: '3',
      title: 'Bouwkundig Advies',
      description:
        'Stap van uw woonverhaal in Leuven & ruime omgeving. Wij vergezellen u met eerlijke feedback tijdens een huisbezichtiging.',
      imageSrc: '/three-images/Three-Image-3.webp',
      link: '/advies',
      linkText: 'Laat u duurzaam adviseren',
    },
  ];

}
