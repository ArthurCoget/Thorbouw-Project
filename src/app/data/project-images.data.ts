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

const utenLink = '/fotos&realisaties/Uten';
const prefix = 'Uten';
export const IMAGES_UTEN = [
  ...createImages(1, 1, utenLink, 'Foto van renovatie in Ottenburg living', {
    category: 'Interieur',
    title: 'Living',
    prefix: prefix,
  }),
  ...createImages(2, 16, utenLink, 'Foto van renovatie in Ottenburg exterieur', {
    category: 'Exterieur',
    prefix: prefix,
  }),
  ...createImages(17, 17, utenLink, 'Foto van renovatie in Ottenburg inkom hall', {
    category: 'Interieur',
    title: 'Inkom hall',
    prefix: prefix,
  }),
  ...createImages(18, 18, utenLink, 'Foto van renovatie in Ottenburg trappen hall', {
    category: 'Interieur',
    title: 'Trappen hall',
    prefix: prefix,
  }),
  ...createImages(19, 22, utenLink, 'Foto van renovatie in Ottenburg badkamer', {
    category: 'Interieur',
    title: 'Badkamer',
    prefix: prefix,
  }),
  ...createImages(23, 23, utenLink, 'Foto van renovatie in Ottenburg slaapkamer', {
    category: 'Interieur',
    title: 'Slaapkamer',
    description: 'Renovatie van de kinderkamer',
    prefix: prefix,
  }),
  ...createImages(24, 24, utenLink, 'Foto van renovatie in Ottenburg slaapkamer', {
    category: 'Interieur',
    title: 'Slaapkamer',
    prefix: prefix,
  }),
  ...createImages(25, 27, utenLink, 'Foto van renovatie in Ottenburg keuken eiland', {
    category: 'Interieur',
    title: 'Keuken eiland',
    description: 'Prachtige keuken met een groot eiland in het midden',
    prefix: prefix,
  }),
  ...createImages(28, 28, utenLink, 'Foto van renovatie in Ottenburg keuken', {
    category: 'Interieur',
    title: 'Keuken',
    prefix: prefix,
  }),
  ...createImages(29, 29, utenLink, 'Foto van renovatie in Ottenburg ontspanningsruimte', {
    category: 'Interieur',
    title: 'Ontspanningsruimte',
    prefix: prefix,
  }),
  ...createImages(30, 30, utenLink, 'Foto van renovatie in Ottenburg art studio', {
    category: 'Interieur',
    title: 'Art studio',
    prefix: prefix,
  }),
];
