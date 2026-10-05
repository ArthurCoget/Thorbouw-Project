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
  {
    slug: 'Engelen',
    title: 'Modernisering in Engelen',
    subtitle: 'Modernisering Bad- en slaapkamer',
    description: 'Met ruimtelijk inzicht en de juiste materialen transformeerden we deze kamers.',
    location: 'Engelen',
    locationCoord: [4.636699, 50.95818],
    year: 2014,
    cardImages: [
      {
        src: '/fotos&realisaties/Engelen/Engelen001HR.webp',
        alt: 'Foto van verbouwing in Engelen',
      },
      {
        src: '/fotos&realisaties/Engelen/Engelen002HR.webp',
        alt: 'Foto van verbouwing in Engelen',
      },
      {
        src: '/fotos&realisaties/Engelen/Engelen003HR.webp',
        alt: 'Foto van verbouwing in Engelen',
      },
    ],
    images: [
      {
        src: '/fotos&realisaties/Engelen/Engelen001HR.webp',
        alt: 'Foto van verbouwing in Engelen',
      },
      {
        src: '/fotos&realisaties/Engelen/Engelen002HR.webp',
        alt: 'Foto van verbouwing in Engelen',
      },
      {
        src: '/fotos&realisaties/Engelen/Engelen003HR.webp',
        alt: 'Foto van verbouwing in Engelen',
      },
      {
        src: '/fotos&realisaties/Engelen/Engelen004HR.webp',
        alt: 'Foto van verbouwing in Engelen',
      },
      {
        src: '/fotos&realisaties/Engelen/Engelen005HR.webp',
        alt: 'Foto van verbouwing in Engelen',
      },
      {
        src: '/fotos&realisaties/Engelen/Engelen006HR.webp',
        alt: 'Foto van verbouwing in Engelen',
      },
      {
        src: '/fotos&realisaties/Engelen/Engelen007HR.webp',
        alt: 'Foto van verbouwing in Engelen',
      },
      {
        src: '/fotos&realisaties/Engelen/Engelen008HR.webp',
        alt: 'Foto van verbouwing in Engelen',
      },
      {
        src: '/fotos&realisaties/Engelen/Engelen009HR.webp',
        alt: 'Foto van verbouwing in Engelen',
      },
      {
        src: '/fotos&realisaties/Engelen/Engelen010HR.webp',
        alt: 'Foto van verbouwing in Engelen',
      },
      {
        src: '/fotos&realisaties/Engelen/Engelen011HR.webp',
        alt: 'Foto van verbouwing in Engelen',
      },
      {
        src: '/fotos&realisaties/Engelen/Engelen012HR.webp',
        alt: 'Foto van verbouwing in Engelen',
      },
      {
        src: '/fotos&realisaties/Engelen/Engelen013HR.webp',
        alt: 'Foto van verbouwing in Engelen',
      },
      {
        src: '/fotos&realisaties/Engelen/Engelen014HR.webp',
        alt: 'Foto van verbouwing in Engelen',
      },
      {
        src: '/fotos&realisaties/Engelen/Engelen015HR.webp',
        alt: 'Foto van verbouwing in Engelen',
      },
      {
        src: '/fotos&realisaties/Engelen/Engelen016HR.webp',
        alt: 'Foto van verbouwing in Engelen',
      },
      {
        src: '/fotos&realisaties/Engelen/Engelen017HR.webp',
        alt: 'Foto van verbouwing in Engelen',
      },
      {
        src: '/fotos&realisaties/Engelen/Engelen018HR.webp',
        alt: 'Foto van verbouwing in Engelen',
      },
      {
        src: '/fotos&realisaties/Engelen/Engelen019HR.webp',
        alt: 'Foto van verbouwing in Engelen',
      },
      {
        src: '/fotos&realisaties/Engelen/Engelen020HR.webp',
        alt: 'Foto van verbouwing in Engelen',
      },
      {
        src: '/fotos&realisaties/Engelen/Engelen021HR.webp',
        alt: 'Foto van verbouwing in Engelen',
      },
    ],
  },
  {
    slug: 'Haasrode',
    title: 'Wasbeurt in Haasrode',
    subtitle: 'Verbouwing in Haasrode.',
    description: 'Verbouwing van de leef en wasruimten.',
    location: 'Haasrode',
    locationCoord: [4.72616, 50.83461],
    year: 2015,
    cardImages: [
      {
        src: '/fotos&realisaties/Haasrode/4DSF6667.webp',
        alt: 'Foto van verbouwing in Haasrode',
      },
      {
        src: '/fotos&realisaties/Haasrode/5DSF6545.webp',
        alt: 'Foto van verbouwing in Haasrode',
      },
      {
        src: '/fotos&realisaties/Haasrode/6DSF6660.webp',
        alt: 'Foto van verbouwing in Haasrode',
      },
    ],
    images: [
      {
        src: '/fotos&realisaties/Haasrode/4DSF6667.webp',
        alt: 'Foto van verbouwing in Haasrode',
      },
      {
        src: '/fotos&realisaties/Haasrode/5DSF6545.webp',
        alt: 'Foto van verbouwing in Haasrode',
      },
      {
        src: '/fotos&realisaties/Haasrode/6DSF6660.webp',
        alt: 'Foto van verbouwing in Haasrode',
      },
      {
        src: '/fotos&realisaties/Haasrode/8DSF6613.webp',
        alt: 'Foto van verbouwing in Haasrode',
      },
      {
        src: '/fotos&realisaties/Haasrode/_DSF6540.webp',
        alt: 'Foto van verbouwing in Haasrode',
      },
      {
        src: '/fotos&realisaties/Haasrode/_DSF6561.webp',
        alt: 'Foto van verbouwing in Haasrode',
      },
      {
        src: '/fotos&realisaties/Haasrode/_DSF6573.webp',
        alt: 'Foto van verbouwing in Haasrode',
      },
      {
        src: '/fotos&realisaties/Haasrode/_DSF6598.webp',
        alt: 'Foto van verbouwing in Haasrode',
      },
      {
        src: '/fotos&realisaties/Haasrode/_DSF6603.webp',
        alt: 'Foto van verbouwing in Haasrode',
      },
    ],
  },
  /*
  {
    slug: 'Borchpoorte',
    title: 'project in Borchpoorte',
    subtitle: 'verbouwing in Borchpoorte.',
    description: 'Verbouwing van de leef en wasruimten.',
    location: 'Borchpoorte',
    locationCoord: [4.72616, 50.83461],
    year: 2015,
    cardImages: [
      {
        src: '/fotos&realisaties/Borchpoorte/DSC_0077.bewerkt.webp',
        alt: 'Foto van verbouwing in Borchpoorte',
      },
      {
        src: '/fotos&realisaties/Borchpoorte/kant_brussel.webp',
        alt: 'Foto van verbouwing in Borchpoorte',
      },
    ],
    images: [
      {
        src: '/fotos&realisaties/Borchpoorte/DSC_0077.bewerkt.webp',
        alt: 'Foto van verbouwing in Borchpoorte',
      },
      {
        src: '/fotos&realisaties/Borchpoorte/kant_brussel.webp',
        alt: 'Foto van verbouwing in Borchpoorte',
      },
    ],
  },*/
  {
    slug: 'Heverlee',
    title: 'Stijlvolle verbouwing',
    subtitle: 'Verbouwing in Heverlee.',
    description: 'Inrichting wookamer en verbouwing veranda.',
    location: 'Heverlee',
    locationCoord: [4.69872, 50.85272],
    year: 2015,
    cardImages: [
      {
        src: '/fotos&realisaties/Heverlee/achtergevelvanafpadvoorterras.webp',
        alt: 'Fotos van verbouwing Heverlee',
      },
      {
        src: '/fotos&realisaties/Heverlee/achtergevelvanuitvijver.webp',
        alt: 'Fotos van verbouwing Heverlee',
      },
      {
        src: '/fotos&realisaties/Heverlee/eethoekmetzichtopkeukentelefoonhoekeninkomhall.webp',
        alt: 'Fotos van verbouwing Heverlee',
      },
    ],
    images: [
      {
        src: '/fotos&realisaties/Heverlee/achtergevelvanafpadvoorterras.webp',
        alt: 'Fotos van verbouwing Heverlee',
      },
      {
        src: '/fotos&realisaties/Heverlee/achtergevelvanuitvijver.webp',
        alt: 'Fotos van verbouwing Heverlee',
      },
      {
        src: '/fotos&realisaties/Heverlee/eethoekmetzichtopkeukentelefoonhoekeninkomhall.webp',
        alt: 'Fotos van verbouwing Heverlee',
      },
      {
        src: '/fotos&realisaties/Heverlee/interinkomhall2.webp',
        alt: 'Fotos van verbouwing Heverlee',
      },
      {
        src: '/fotos&realisaties/Heverlee/interlivingkast.webp',
        alt: 'Fotos van verbouwing Heverlee',
      },
      {
        src: '/fotos&realisaties/Heverlee/keukenoverzicht.webp',
        alt: 'Fotos van verbouwing Heverlee',
      },
      {
        src: '/fotos&realisaties/Heverlee/living.webp',
        alt: 'Fotos van verbouwing Heverlee',
      },
      {
        src: '/fotos&realisaties/Heverlee/paal.webp',
        alt: 'Fotos van verbouwing Heverlee',
      },
      {
        src: '/fotos&realisaties/Heverlee/paalmeteetkamerkastenzichtkeuken2.webp',
        alt: 'Fotos van verbouwing Heverlee',
      },
      {
        src: '/fotos&realisaties/Heverlee/tweemannekesmetzichtnaaroverloop.webp',
        alt: 'Fotos van verbouwing Heverlee',
      },
      {
        src: '/fotos&realisaties/Heverlee/vanafeettafeloptelefoonhoekeninkomhall.webp',
        alt: 'Fotos van verbouwing Heverlee',
      },
      {
        src: '/fotos&realisaties/Heverlee/vanafvoordeurnaarvijverenterras.webp',
        alt: 'Fotos van verbouwing Heverlee',
      },
      {
        src: '/fotos&realisaties/Heverlee/voordeur.webp',
        alt: 'Fotos van verbouwing Heverlee',
      },
      {
        src: '/fotos&realisaties/Heverlee/voorgevelvierkant.webp',
        alt: 'Fotos van verbouwing Heverlee',
      },
      {
        src: '/fotos&realisaties/Heverlee/zichtoptuindeur.webp',
        alt: 'Fotos van verbouwing Heverlee',
      },
      {
        src: '/fotos&realisaties/Heverlee/zichtvanuitvijveroptafelkleinterras.webp',
        alt: 'Fotos van verbouwing Heverlee',
      },
    ],
  },
];
