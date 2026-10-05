import { IProjectContent } from '../interfaces/iproject-content';
import {
  IMAGES_BRANDTS,
  IMAGES_JUSTIUS_LIPSIUS,
  IMAGES_MEULEN,
  IMAGES_SUCAET,
  IMAGES_UTEN,
  IMAGES_VERHOEF,
} from './project-images.data';

export const PROJECTS: IProjectContent[] = [
  {
    slug: 'Brandts',
    title: 'Nieuwbouw Korbeek-Lo',
    subtitle: 'Modern wooncomfort, vakkundig gerealiseerd',
    description:
      'Met kwalitatieve materialen en oog voor detail realiseren we duurzame woonoplossingen.',
    location: 'Korbeek-Lo',
    locationCoord: [4.76687, 50.862358],
    year: 2024,
    cardImages: [
      {
        src: '/fotos&realisaties/BuurBrandts/brandts_1.webp',
        alt: 'Foto van nieuwbouw in Korbeek-Lo',
      },
      {
        src: '/fotos&realisaties/BuurBrandts/brandts_10.webp',
        alt: 'Foto van nieuwbouw in Korbeek-Lo',
      },
      {
        src: '/fotos&realisaties/BuurBrandts/brandts_20.webp',
        alt: 'Foto van nieuwbouw in Korbeek-Lo',
      },
    ],
    images: IMAGES_BRANDTS,
  },
  {
    slug: 'herent',
    title: 'Nieuwbouw te Herent',
    subtitle: 'Hedendaagse nieuwbouw met focus op kwaliteit en comfort',
    description:
      'Voor dit nieuwbouwproject in Herent realiseerden we een moderne woning met hoogwaardige afwerking en oog voor detail. Duurzaamheid en wooncomfort stonden centraal in elke fase van het bouwproces.',
    location: 'Herent',
    locationCoord: [4.671824, 50.90535],
    year: 2025,
    cardImages: [
      {
        src: '/fotos&realisaties/Herent/Herent_1.webp',
        alt: 'Foto van nieuwbouw in Herent',
      },
      {
        src: '/fotos&realisaties/Herent/Herent_2.webp',
        alt: 'Foto van nieuwbouw in Herent',
      },
      {
        src: '/fotos&realisaties/Herent/Herent_3.webp',
        alt: 'Foto van nieuwbouw in Herent',
      },
    ],
    images: Array.from({ length: 50 }, (_, i) => ({
      src: `/fotos&realisaties/Herent/Herent_${i + 1}.webp`,
      alt: 'Foto van nieuwbouw in Herent',
    })),
  },
  {
    slug: 'justiuslipsius',
    title: 'Appartement Justius Lipsius',
    subtitle: 'Appartement met respect voor moderne woonbehoeften',
    description:
      'Voor de renovatie van deze historische woning in Leuven combineerden we vakmanschap met moderne technieken om een comfortabele leefruimte te creëren, terwijl we het karakter en de charme van het oorspronkelijke gebouw behouden.',
    location: 'Leuven',
    locationCoord: [4.703989, 50.88378],
    year: 2024,
    cardImages: [
      {
        src: '/fotos&realisaties/JustiusLipsius/Justius_1.webp',
        alt: 'Foto van renovatie in Leuven',
      },
      {
        src: '/fotos&realisaties/JustiusLipsius/Lipsius_1.webp',
        alt: 'Foto van renovatie in Leuven',
      },
      {
        src: '/fotos&realisaties/JustiusLipsius/Justius_15.webp',
        alt: 'Foto van renovatie in Leuven',
      },
    ],
    images: IMAGES_JUSTIUS_LIPSIUS,
  },
  {
    slug: 'uten',
    title: 'Nieuwbouw te Ottenburg',
    subtitle: 'Nieuwbouw met een focus op verbinding met de natuur',
    description: 'Nieuwbouw in Ottenburg waarbij de link met natuur en buitenleven centraal staat.',
    location: 'Ottenburg',
    locationCoord: [4.611899, 50.75265],
    year: 2024,
    cardImages: [
      {
        src: '/fotos&realisaties/Uten/Uten_1.webp',
        alt: 'Foto van nieuwbouw in Ottenburg',
      },
      {
        src: '/fotos&realisaties/Uten/Uten_2.webp',
        alt: 'Foto van nieuwbouw in Ottenburg',
      },
      {
        src: '/fotos&realisaties/Uten/Uten_3.webp',
        alt: 'Foto van nieuwbouw in Ottenburg',
      },
    ],
    images: IMAGES_UTEN,
  },
  {
    slug: 'meulen',
    title: 'Renovatie te Leuven',
    subtitle: 'Renovatie met focus op het creëren van een warme en gezellige leefruimte',
    description:
      'Oude woning in leuven gerenoveerd tot een warme en gezellige leefruimte. De renovatie omvatte het behoud van karakteristieke elementen, terwijl moderne voorzieningen werden geïntegreerd om een comfortabele en functionele woonomgeving te creëren.',
    location: 'Leuven',
    locationCoord: [4.692895, 50.87609],
    year: 2024,
    cardImages: [
      {
        src: '/fotos&realisaties/Vandermeulen/leuven_1.webp',
        alt: 'Foto van renovatie in Leuven',
      },
      {
        src: '/fotos&realisaties/Vandermeulen/leuven_10.webp',
        alt: 'Foto van renovatie in Leuven',
      },
      {
        src: '/fotos&realisaties/Vandermeulen/leuven_15.webp',
        alt: 'Foto van renovatie in Leuven',
      },
    ],
    images: IMAGES_MEULEN,
  },
  {
    slug: 'sucaet',
    title: 'Renovatie voor Heverlee',
    offset: 35,
    subtitle: 'Renovatie met focus op moderniteit en comfort',
    description:
      'Voor deze renovatie in Heverlee hebben we een moderne leefruimte gecreëerd die voldoet aan de hedendaagse woonbehoeften, met aandacht voor kwaliteit en comfort.',
    location: 'Heverlee',
    locationCoord: [4.690487, 50.85946],
    year: 2024,
    cardImages: [
      {
        src: '/fotos&realisaties/Sucaet/heverlee_1.webp',
        alt: 'Foto van renovatie in Heverlee',
      },
      {
        src: '/fotos&realisaties/Sucaet/heverlee_10.webp',
        alt: 'Foto van renovatie in Heverlee',
      },
      {
        src: '/fotos&realisaties/Sucaet/heverlee_20.webp',
        alt: 'Foto van renovatie in Heverlee',
      },
    ],
    images: IMAGES_SUCAET,
  },
  {
    slug: 'verhoef',
    title: 'Renovatie te Hoog Linden',
    subtitle: 'Renovatie met focus op moderniteit en comfort',
    description:
      'Voor deze renovatie in Hoog Linden hebben we een moderne leefruimte gecreëerd die voldoet aan de hedendaagse woonbehoeften, met aandacht voor kwaliteit en comfort.',
    location: 'Hoog Linden',
    locationCoord: [4.765579, 50.90407],
    year: 2024,
    cardImages: [
      {
        src: '/fotos&realisaties/Verhoef/verhoef_1.webp',
        alt: 'Foto van renovatie in Hoog Linden',
      },
      {
        src: '/fotos&realisaties/Verhoef/verhoef_10.webp',
        alt: 'Foto van renovatie in Hoog Linden',
      },
      {
        src: '/fotos&realisaties/Verhoef/verhoef_20.webp',
        alt: 'Foto van renovatie in Hoog Linden',
      },
    ],
    images: IMAGES_VERHOEF,
  },
];
