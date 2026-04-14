import { IProjectContent, createImages } from '../interfaces/iproject-content';

const imagesJusiusLipsius = [
  // 1 - 20 (Exterieur)
  ...createImages(
    1,
    20,
    '/fotos&realisaties/JustiusLipsius',
    'Foto van renovatie in Leuven exterieur',
    {
      category: 'Exterieur',
      prefix: 'Justius',
    },
  ),

  // 1 - 8 (Hal)
  ...createImages(
    1,
    8,
    '/fotos&realisaties/JustiusLipsius',
    'Foto van renovatie in Leuven interieur hal',
    {
      category: 'Interieur',
      title: 'Hal',
      prefix: 'Lipsius',
    },
  ),

  // 9 - 14 (Eettafel)
  ...createImages(
    9,
    14,
    '/fotos&realisaties/JustiusLipsius',
    'Foto van renovatie in Leuven interieur eettafel',
    {
      category: 'Interieur',
      title: 'Eettafel',
      prefix: 'Lipsius',
    },
  ),
  // 15 - 19 (Keuken)
  ...createImages(
    15,
    19,
    '/fotos&realisaties/JustiusLipsius',
    'Foto van renovatie in Leuven interieur overzicht living',
    {
      category: 'Interieur',
      title: 'Overzicht Living',
      prefix: 'Lipsius',
    },
  ),

  // 20 - 21 (Overzicht Living)
  ...createImages(
    20,
    21,
    '/fotos&realisaties/JustiusLipsius',
    'Foto van renovatie in Leuven interieur overzicht living',
    {
      category: 'Interieur',
      title: 'Overzicht Living',
      prefix: 'Lipsius',
    },
  ),

  // 22 - 24 (Salon)
  ...createImages(
    22,
    24,
    '/fotos&realisaties/JustiusLipsius',
    'Foto van renovatie in Leuven interieur salon',
    {
      category: 'Interieur',
      title: 'Salon',
      prefix: 'Lipsius',
    },
  ),

  // 20 (Slaapkamer)
  ...createImages(
    25,
    25,
    '/fotos&realisaties/JustiusLipsius',
    'Foto van renovatie in Leuven interieur slaapkamer',
    {
      category: 'Interieur',
      title: 'Slaapkamer',
      prefix: 'Lipsius',
    },
  ),
];

export const PROJECTS: IProjectContent[] = [
  {
    slug: 'wespelaar',
    title: 'Metamorfose te Wespelaar',
    subtitle: 'Modern wooncomfort, vakkundig gerealiseerd',
    description:
      'Met kwalitatieve materialen en oog voor detail realiseren we duurzame woonoplossingen.',
    location: 'Wespelaar',
    year: 2024,
    cardImages: [
      {
        src: '/fotos&realisaties/Wespelaar/WespelaarFotoCard.webp',
        alt: 'Foto van verbouwing in Wespelaar',
      },
      {
        src: '/fotos&realisaties/Wespelaar/WespelaarFotoCard2.webp',
        alt: 'Foto van verbouwing in Wespelaar',
      },
      {
        src: '/fotos&realisaties/Wespelaar/WespelaarFotoCard3.webp',
        alt: 'Foto van verbouwing in Wespelaar',
      },
    ],
    images: [
      {
        src: '/fotos&realisaties/Wespelaar/WespelaarFotoCardUpscaled.webp',
        alt: 'Foto van verbouwing in Wespelaar',
      },
      {
        src: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=1200&q=80',
        alt: 'Alpine peaks rising above the clouds',
      },
      {
        src: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80',
        alt: 'Classic automobile on an empty road',
        title: 'Open Road',
        category: 'Automobile',
        description: 'The freedom of the asphalt horizon',
      },
      {
        src: 'https://images.unsplash.com/photo-1466970601638-4e5fb6556584?w=1200&q=80',
        alt: 'Misty mountain valley at dawn',
        title: 'Morning Veil',
        category: 'Mountains',
        description: 'Dawn breaks over the ancient valley',
      },
      {
        src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1200&q=80',
        alt: 'Deer standing in a meadow',
        title: 'Still Presence',
        category: 'Wildlife',
        description: 'A moment held in amber light',
      },
      {
        src: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1200&q=80',
        alt: 'Vintage bicycle against a wall',
        title: 'Au Revoir',
        category: 'Lifestyle',
        description: 'Resting between journeys',
      },
      {
        src: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=1200&q=80',
        alt: 'Minimal workspace with laptop',
      },
      {
        src: 'https://images.unsplash.com/photo-1532103054090-3491f1a05d0d?w=1200&q=80',
        alt: 'Abstract office architecture',
        title: 'Geometry',
        category: 'Architecture',
        description: 'Lines that define the modern age',
      },
      {
        src: 'https://images.unsplash.com/photo-1599033153041-e88627ca70bb?w=1200&q=80',
        alt: 'City skyline at dusk',
      },
      {
        src: 'https://images.unsplash.com/photo-1507097634215-e82e6b518529?w=1200&q=80',
        alt: 'Aerial city view at night',
      },
      {
        src: 'https://images.unsplash.com/photo-1528988719300-046ff7faf8cb?w=1200&q=80',
        alt: 'Snow-capped mountain range',
        title: 'First Light',
        category: 'Mountains',
        description: 'Untouched by time or tide',
      },
      {
        src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200&q=80',
        alt: 'Ocean wave crashing on shore',
        title: 'The Shore',
        category: 'Ocean',
        description: 'Between the land and the infinite',
      },
      {
        src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80',
        alt: 'Lake reflecting the mountains',
        title: 'Mirror Lake',
        category: 'Mountains',
        description: "Nature's perfect symmetry",
      },
    ],
  },
  {
    slug: 'herent',
    title: 'Nieuwbouw te Herent',
    subtitle: 'Hedendaagse nieuwbouw met focus op kwaliteit en comfort',
    description:
      'Voor dit nieuwbouwproject in Herent realiseerden we een moderne woning met hoogwaardige afwerking en oog voor detail. Duurzaamheid en wooncomfort stonden centraal in elke fase van het bouwproces.',
    location: 'Herent',
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
    slug: 'jusiuslipsius',
    title: 'Renovatie voor Jusius Lipsius',
    subtitle: 'Historische renovatie met respect voor erfgoed en moderne woonbehoeften',
    description:
      'Voor de renovatie van deze historische woning in Leuven combineerden we vakmanschap met moderne technieken om een comfortabele leefruimte te creëren, terwijl we het karakter en de charme van het oorspronkelijke gebouw behouden.',
    location: 'Leuven',
    year: 2024,
    cardImages: [
      {
        src: '/fotos&realisaties/JusiusLipsius/JusiusLipsius_1.webp',
        alt: 'Foto van renovatie in Leuven',
      },
      {
        src: '/fotos&realisaties/JusiusLipsius/Lipsius_1.webp',
        alt: 'Foto van renovatie in Leuven',
      },
      {
        src: '/fotos&realisaties/JusiusLipsius/Justius_15.webp',
        alt: 'Foto van renovatie in Leuven',
      },
    ],
    images: imagesJusiusLipsius,
  },
];
