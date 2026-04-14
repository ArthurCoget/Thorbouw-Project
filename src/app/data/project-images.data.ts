import { createImages } from '../interfaces/iproject-content';

export const IMAGES_JUSTIUS_LIPSIUS = [
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
