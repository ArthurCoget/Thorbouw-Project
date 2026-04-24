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
const utenPrefix = 'Uten';
export const IMAGES_UTEN = [
  ...createImages(1, 1, utenLink, 'Foto van renovatie in Ottenburg living', {
    category: 'Interieur',
    title: 'Living',
    prefix: utenPrefix,
  }),
  ...createImages(2, 16, utenLink, 'Foto van renovatie in Ottenburg exterieur', {
    category: 'Exterieur',
    prefix: utenPrefix,
  }),
  ...createImages(17, 17, utenLink, 'Foto van renovatie in Ottenburg inkom hall', {
    category: 'Interieur',
    title: 'Inkom hall',
    prefix: utenPrefix,
  }),
  ...createImages(18, 18, utenLink, 'Foto van renovatie in Ottenburg trappen hall', {
    category: 'Interieur',
    title: 'Trappen hall',
    prefix: utenPrefix,
  }),
  ...createImages(19, 22, utenLink, 'Foto van renovatie in Ottenburg badkamer', {
    category: 'Interieur',
    title: 'Badkamer',
    prefix: utenPrefix,
  }),
  ...createImages(23, 23, utenLink, 'Foto van renovatie in Ottenburg slaapkamer', {
    category: 'Interieur',
    title: 'Slaapkamer',
    description: 'Renovatie van de kinderkamer',
    prefix: utenPrefix,
  }),
  ...createImages(24, 24, utenLink, 'Foto van renovatie in Ottenburg slaapkamer', {
    category: 'Interieur',
    title: 'Slaapkamer',
    prefix: utenPrefix,
  }),
  ...createImages(25, 27, utenLink, 'Foto van renovatie in Ottenburg keuken eiland', {
    category: 'Interieur',
    title: 'Keuken eiland',
    description: 'Prachtige keuken met een groot eiland in het midden',
    prefix: utenPrefix,
  }),
  ...createImages(28, 28, utenLink, 'Foto van renovatie in Ottenburg keuken', {
    category: 'Interieur',
    title: 'Keuken',
    prefix: utenPrefix,
  }),
  ...createImages(29, 29, utenLink, 'Foto van renovatie in Ottenburg ontspanningsruimte', {
    category: 'Interieur',
    title: 'Ontspanningsruimte',
    prefix: utenPrefix,
  }),
  ...createImages(30, 30, utenLink, 'Foto van renovatie in Ottenburg art studio', {
    category: 'Interieur',
    title: 'Art studio',
    prefix: utenPrefix,
  }),
];

const meulenLink = '/fotos&realisaties/Vandermeulen';
const meulenPrefix = 'leuven';
export const IMAGES_MEULEN = [
  ...createImages(1, 3, meulenLink, 'Foto van renovatie in Leuven bureau', {
    category: 'Interieur',
    title: 'Bureau',
    prefix: meulenPrefix,
  }),
  ...createImages(4, 5, meulenLink, 'Foto van renovatie in Leuven living', {
    category: 'Interieur',
    title: 'Living',
    prefix: meulenPrefix,
  }),
  ...createImages(6, 6, meulenLink, 'Foto van renovatie in Leuven waskot', {
    category: 'Interieur',
    title: 'Waskot',
    prefix: meulenPrefix,
  }),
  ...createImages(7, 10, meulenLink, 'Foto van renovatie in Leuven keuken', {
    category: 'Interieur',
    title: 'Keuken',
    prefix: meulenPrefix,
  }),
  ...createImages(11, 11, meulenLink, 'Foto van renovatie in Leuven klerenkast', {
    category: 'Interieur',
    title: 'Klerenkast',
    prefix: meulenPrefix,
  }),
  ...createImages(12, 14, meulenLink, 'Foto van renovatie in Leuven slaapkamer', {
    category: 'Interieur',
    title: 'Slaapkamer',
    prefix: meulenPrefix,
  }),
  ...createImages(15, 17, meulenLink, 'Foto van renovatie in Leuven living', {
    category: 'Interieur',
    title: 'Living',
    prefix: meulenPrefix,
  }),
  ...createImages(18, 23, meulenLink, 'Foto van renovatie in Leuven gang/hal', {
    category: 'Interieur',
    title: 'Gang/Hal',
    prefix: meulenPrefix,
  }),
  ...createImages(24, 25, meulenLink, 'Foto van renovatie in Leuven spoelbakken badkamer', {
    category: 'Interieur',
    title: 'Spoelbakken Badkamer',
    prefix: meulenPrefix,
  }),
  ...createImages(26, 27, meulenLink, 'Foto van renovatie in Leuven eettafel', {
    category: 'Interieur',
    title: 'Eettafel',
    prefix: meulenPrefix,
  }),
];

const sucaetLink = '/fotos&realisaties/Sucaet';
const sucaetPrefix = 'heverlee';
export const IMAGES_SUCAET = [
  ...createImages(1, 10, sucaetLink, 'Foto van renovatie in Heverlee exterieur', {
    category: 'Exterieur',
    prefix: sucaetPrefix,
  }),
  ...createImages(11, 11, sucaetLink, 'Foto van renovatie in Heverlee living', {
    category: 'Interieur',
    title: 'Living',
    description: 'Prachtige gezellige living ruimte',
    prefix: sucaetPrefix,
  }),
  ...createImages(12, 18, sucaetLink, 'Foto van renovatie in Heverlee eetkamer', {
    category: 'Interieur',
    title: 'Eetkamer',
    description: 'Ruime eetkamer met een grote eettafel',
    prefix: sucaetPrefix,
  }),
  ...createImages(19, 20, sucaetLink, 'Foto van renovatie in Heverlee keuken', {
    category: 'Interieur',
    title: 'Keuken',
    prefix: sucaetPrefix,
  }),
  ...createImages(21, 24, sucaetLink, 'Foto van renovatie in Heverlee bureau', {
    category: 'Interieur',
    title: 'Bureau',
    prefix: sucaetPrefix,
  }),
  ...createImages(25, 25, sucaetLink, 'Foto van renovatie in Heverlee trappen', {
    category: 'Interieur',
    title: 'Trappen',
    description:
      'Trappen die zich bevinden op de eerste verdieping van de woning met glazen balustrade',
    prefix: sucaetPrefix,
  }),
  ...createImages(26, 28, sucaetLink, 'Foto van renovatie in Heverlee badkamer', {
    category: 'Interieur',
    title: 'Badkamer',
    prefix: sucaetPrefix,
  }),
  ...createImages(29, 32, sucaetLink, 'Foto van renovatie in Heverlee slaapkamer', {
    category: 'Interieur',
    title: 'Slaapkamer',
    prefix: sucaetPrefix,
  }),
  ...createImages(33, 36, sucaetLink, 'Foto van renovatie in Heverlee trappen/hal', {
    category: 'Interieur',
    title: 'Trappen/Hal',
    prefix: sucaetPrefix,
  }),
  ...createImages(37, 45, sucaetLink, 'Foto van renovatie in Heverlee exterieur', {
    category: 'Exterieur',
    prefix: sucaetPrefix,
  }),
];

const verhoefLink = '/fotos&realisaties/Verhoef';
const verhoefPrefix = 'verhoef';
export const IMAGES_VERHOEF = [
  ...createImages(1, 1, verhoefLink, 'Foto van renovatie in Leuven badkamer', {
    category: 'Interieur',
    title: 'Badkamer',
    prefix: verhoefPrefix,
  }),
  ...createImages(2, 2, verhoefLink, 'Foto van renovatie in Leuven kamer/bureau', {
    category: 'Interieur',
    title: 'Kamer/Bureau',
    prefix: verhoefPrefix,
  }),
  ...createImages(3, 3, verhoefLink, 'Foto van renovatie in Leuven woonkamer', {
    category: 'Interieur',
    title: 'Woonkamer',
    prefix: verhoefPrefix,
  }),
  ...createImages(5, 10, verhoefLink, 'Foto van renovatie in Leuven badkamer', {
    category: 'Interieur',
    title: 'Badkamer',
    prefix: verhoefPrefix,
  }),
  ...createImages(11, 12, verhoefLink, 'Foto van renovatie in Leuven kamer/bureau', {
    category: 'Interieur',
    title: 'Kamer/Bureau',
    prefix: verhoefPrefix,
  }),
  ...createImages(13, 15, verhoefLink, 'Foto van renovatie in Leuven trappen', {
    category: 'Interieur',
    title: 'Trappen',
    prefix: verhoefPrefix,
  }),
  ...createImages(16, 19, verhoefLink, 'Foto van renovatie in Leuven veranda', {
    category: 'Interieur',
    title: 'Veranda',
    prefix: verhoefPrefix,
  }),
  ...createImages(20, 25, verhoefLink, 'Foto van renovatie in Leuven exterieur', {
    category: 'Exterieur',
    prefix: verhoefPrefix,
  }),
];
