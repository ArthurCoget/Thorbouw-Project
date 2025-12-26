import { IHeroContent } from '../interfaces/hero-content';
import { IPillar } from '../interfaces/pillar';
import { ICarouselImage } from '../interfaces/carousel-image';

export const HOME_HERO_CONTENT: IHeroContent = {
  variant: 'complete',
  image: 'LandingHero.webp',
  altText:
    'Modern sustainable house built with wood and glass showcasing eco-friendly architecture',
  title: 'Volhoudbaar bouwen aan een nieuwe wereld',
  subtitle: 'Aanemer gezocht?',
  buttonText: 'Contacteer Thorbouw voor Volhoudbaar wonen',
  buttonLink: '/contact',
};

export const HOME_PILLARS: IPillar[] = [
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

export const CAROUSEL_IMAGES: ICarouselImage[] = [
  {
    id: 1,
    img: 'verbouwing-linden/VerbouwingLinden-Carousel.webp',
    title: 'Verbouwing in Linden',
    date: '06/2018',
  },
  { id: 6, img: '/placeholder/1-placeholder.webp', title: 'Garden Office', date: '05/2022' },
  { id: 2, img: '/placeholder/2-placeholder.webp', title: 'Modern Glasshouse', date: '09/2019' },
  { id: 3, img: '/placeholder/3-placeholder.webp', title: 'Classic Renovation', date: '02/2020' },
  { id: 4, img: '/placeholder/4-placeholder.webp', title: 'City Loft', date: '11/2021' },
  { id: 5, img: '/placeholder/5-placeholder.webp', title: 'Garden Office', date: '05/2022' },
];
