import { IProjectContent } from '../interfaces/iproject-content';

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
        src: 'https://images.unsplash.com/photo-1477666250292-1419fac4c25c',
        alt: 'Unsplash foto',
      },
      {
        src: 'https://images.unsplash.com/photo-1425342605259-25d80e320565',
        alt: 'Unsplash foto',
      },
      {
        src: 'https://images.unsplash.com/photo-1503249023995-51b0f3778ccf',
        alt: 'Unsplash foto',
      },
    ],
  },
];
