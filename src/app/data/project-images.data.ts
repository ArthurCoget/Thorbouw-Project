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
  ...createImages(1, 1, utenLink, 'Foto van nieuwbouw in Ottenburg living', {
    category: 'Interieur',
    title: 'Living',
    prefix: utenPrefix,
  }),
  ...createImages(2, 16, utenLink, 'Foto van nieuwbouw in Ottenburg exterieur', {
    category: 'Exterieur',
    prefix: utenPrefix,
  }),
  ...createImages(17, 17, utenLink, 'Foto van nieuwbouw in Ottenburg inkom hall', {
    category: 'Interieur',
    title: 'Inkom hall',
    prefix: utenPrefix,
  }),
  ...createImages(18, 18, utenLink, 'Foto van nieuwbouw in Ottenburg trappen hall', {
    category: 'Interieur',
    title: 'Trappen hall',
    prefix: utenPrefix,
  }),
  ...createImages(19, 22, utenLink, 'Foto van nieuwbouw in Ottenburg badkamer', {
    category: 'Interieur',
    title: 'Badkamer',
    prefix: utenPrefix,
  }),
  ...createImages(23, 23, utenLink, 'Foto van nieuwbouw in Ottenburg slaapkamer', {
    category: 'Interieur',
    title: 'Slaapkamer',
    description: 'Renovatie van de kinderkamer',
    prefix: utenPrefix,
  }),
  ...createImages(24, 24, utenLink, 'Foto van nieuwbouw in Ottenburg slaapkamer', {
    category: 'Interieur',
    title: 'Slaapkamer',
    prefix: utenPrefix,
  }),
  ...createImages(25, 27, utenLink, 'Foto van nieuwbouw in Ottenburg keuken eiland', {
    category: 'Interieur',
    title: 'Keuken eiland',
    description: 'Prachtige keuken met een groot eiland in het midden',
    prefix: utenPrefix,
  }),
  ...createImages(28, 28, utenLink, 'Foto van nieuwbouw in Ottenburg keuken', {
    category: 'Interieur',
    title: 'Keuken',
    prefix: utenPrefix,
  }),
  ...createImages(29, 29, utenLink, 'Foto van nieuwbouw in Ottenburg ontspanningsruimte', {
    category: 'Interieur',
    title: 'Ontspanningsruimte',
    prefix: utenPrefix,
  }),
  ...createImages(30, 30, utenLink, 'Foto van nieuwbouw in Ottenburg art studio', {
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

const brandtsLink = '/fotos&realisaties/BuurBrandts';
const brandtsPrefix = 'brandts';
export const IMAGES_BRANDTS = [
  ...createImages(1, 18, brandtsLink, 'Foto van renovatie in Leuven exterieur', {
    category: 'Exterieur',
    prefix: brandtsPrefix,
  }),

  ...createImages(
    19,
    19,
    brandtsLink,
    'Foto van moderne badkamer met vrijstaand bad in renovatie in Leuven',
    {
      category: 'Badkamer',
      title: 'Vrijstaand bad',
      description:
        'Strakke badkamer met een vrijstaand wit bad tegen een donkere wand, aangevuld met een grote spiegel en ruime lichtinval.',
      prefix: brandtsPrefix,
    },
  ),
  ...createImages(
    20,
    20,
    brandtsLink,
    'Foto van badkamer met dubbele wastafel in renovatie in Leuven',
    {
      category: 'Badkamer',
      title: 'Wastafelmeubel',
      description:
        'Witte badkamer met een zwevend wastafelmeubel, grote spiegelwand en donkere accenten voor een rustige, hedendaagse uitstraling.',
      prefix: brandtsPrefix,
    },
  ),

  ...createImages(
    21,
    22,
    brandtsLink,
    'Foto van houten kastenwand met groene accentwand in renovatie in Leuven',
    {
      category: 'Interieur',
      title: 'Bureau',

      prefix: brandtsPrefix,
    },
  ),

  ...createImages(23, 23, brandtsLink, 'Foto van witte trappenhal in renovatie in Leuven', {
    category: 'Trap',
    title: 'Trappenhal',
    description: 'Lichte trappenhal met witte wanden en natuurlijke lichtinval via een bovenlicht.',
    prefix: brandtsPrefix,
  }),

  ...createImages(24, 26, brandtsLink, 'Foto van trap en bovenlicht in renovatie in Leuven', {
    category: 'Trap',
    title: 'Trap met lichtinval',
    description:
      'Verticaal beeld van de trap met zicht op de verdiepingen en het licht dat binnenvalt.',
    prefix: brandtsPrefix,
  }),

  ...createImages(
    27,
    27,
    brandtsLink,
    'Foto van houten wandpaneel in interieur van renovatie in Leuven',
    {
      category: 'Interieur',
      title: 'Houten wandpaneel',
      description:
        'Warm houten wandpaneel dat een zachte contrastlijn vormt met de donkere vloer en witte wanden.',
      prefix: brandtsPrefix,
    },
  ),
  ...createImages(
    28,
    28,
    brandtsLink,
    'Foto van glazen deur en houten element in renovatie in Leuven',
    {
      category: 'Interieur',
      title: 'Glazen deur',
      description:
        'Glazen deur en scheidingswand zorgen voor transparantie tussen de ruimtes en laten het licht doorstromen.',
      prefix: brandtsPrefix,
    },
  ),

  // ─── Woonkamer ──────────────────────────────────────────────
  ...createImages(
    29,
    29,
    brandtsLink,
    'Foto van zithoek met blauwe zetels in renovatie in Leuven',
    {
      category: 'Woonkamer',
      title: 'Zithoek met blauwe zetels',
      description: 'Zitruimte met opvallende blauwe zetels, grote ramen en een lichte, open sfeer.',
      prefix: brandtsPrefix,
    },
  ),
  ...createImages(
    30,
    30,
    brandtsLink,
    'Foto van woonkamer met groene accentwand in renovatie in Leuven',
    {
      category: 'Woonkamer',
      title: 'Woonkamer met groene accentwand',
      description:
        'Overzicht van de woonkamer vanuit een hoge hoek, met een groene accentwand en een geïntegreerde mediawand.',
      prefix: brandtsPrefix,
    },
  ),
  ...createImages(
    31,
    32,
    brandtsLink,
    'Foto van open leefruimte met zetel en eettafel in renovatie in Leuven',
    {
      category: 'Woonkamer',
      title: 'Open leefruimte',
      description: 'Open leefruimte waarin zitgedeelte en eetruimte vloeiend in elkaar overlopen.',
      prefix: brandtsPrefix,
    },
  ),
  ...createImages(
    33,
    33,
    brandtsLink,
    'Foto van keuken met houten werkblad en leefruimte in renovatie in Leuven',
    {
      category: 'Keuken',
      title: 'Keuken met houten werkblad',
      description: 'Moderne keuken met een warm houten werkblad die open uitkomt op de leefruimte.',
      prefix: brandtsPrefix,
    },
  ),
  ...createImages(
    34,
    35,
    brandtsLink,
    'Foto van woonkamer met zetel en kleuraccenten in renovatie in Leuven',
    {
      category: 'Woonkamer',
      title: 'Zitruimte',
      description: 'Gezellige zitruimte met een grote zetel.',
      prefix: brandtsPrefix,
    },
  ),
  ...createImages(
    36,
    36,
    brandtsLink,
    'Foto van mediameubel met houten nis in renovatie in Leuven',
    {
      category: 'Woonkamer',
      title: 'Mediameubel',
      prefix: brandtsPrefix,
    },
  ),

  ...createImages(
    37,
    37,
    brandtsLink,
    'Foto van lange eettafel met stoelen en raampartij in renovatie in Leuven',
    {
      category: 'Eetkamer',
      title: 'Lange eettafel',
      description:
        'Lange eettafel met stoelen langs een raampartij, perfect voor het samenbrengen van familie en vrienden.',
      prefix: brandtsPrefix,
    },
  ),
  ...createImages(38, 38, brandtsLink, 'Foto van glazen doorkijk en trap in renovatie in Leuven', {
    category: 'Interieur',
    title: 'Doorkijk met glas',
    description:
      'Verticale doorkijk door glazen elementen, met zicht op de verschillende niveaus van de woning.',
    prefix: brandtsPrefix,
  }),
  ...createImages(
    39,
    39,
    brandtsLink,
    'Foto van eetruimte met tafel en stoelen in renovatie in Leuven',
    {
      category: 'Eetkamer',
      title: 'Eetruimte',
      description:
        'Heldere eetruimte met een tafel en stoelen, afgewerkt in neutrale tinten en met veel natuurlijk licht.',
      prefix: brandtsPrefix,
    },
  ),
  ...createImages(
    40,
    40,
    brandtsLink,
    'Foto van witte keuken met zwarte stoelen in renovatie in Leuven',
    {
      category: 'Keuken',
      title: 'Witte keuken',
      description:
        'Strakke witte keuken met zwarte stoelen als contrast en een zorgvuldig uitgewerkte, handgreeploze afwerking.',
      prefix: brandtsPrefix,
    },
  ),
  ...createImages(
    41,
    42,
    brandtsLink,
    'Foto van houten tafel met stoelen en glazen wand in renovatie in Leuven',
    {
      category: 'Eetkamer',
      title: 'Houten eettafel',
      description:
        'Massief houten eettafel met stoelen, naast een glazen wand die de ruimtes visueel verbindt.',
      prefix: brandtsPrefix,
    },
  ),

  ...createImages(
    43,
    43,
    brandtsLink,
    'Foto van zetel in lichte woonkamer in renovatie in Leuven',
    {
      category: 'Woonkamer',
      title: 'Zetel in lichte woonkamer',
      description:
        'Ruime zetel in een lichte woonkamer met uitzicht op de tuin via de grote ramen.',
      prefix: brandtsPrefix,
    },
  ),
  ...createImages(
    44,
    44,
    brandtsLink,
    'Foto van woonkamer met zetel en uitzicht op de tuin in renovatie in Leuven',
    {
      category: 'Woonkamer',
      title: 'Woonkamer met tuinzicht',
      description:
        'Zicht op de woonkamer vanuit een schuine hoek, met de zetel, het tapijt en de tuin als achtergrond.',
      prefix: brandtsPrefix,
    },
  ),

  ...createImages(45, 45, brandtsLink, 'Foto van witte inbouwkast in renovatie in Leuven', {
    category: 'Interieur',
    title: 'Witte inbouwkast',
    description:
      'Naadloos geïntegreerde witte inbouwkast die extra bergruimte biedt zonder de strakke lijnen te verstoren.',
    prefix: brandtsPrefix,
  }),
  ...createImages(
    46,
    46,
    brandtsLink,
    'Foto van trapleuning en schuine lijnen in renovatie in Leuven',
    {
      category: 'Interieur',
      title: 'Keuken',
      prefix: brandtsPrefix,
    },
  ),

  ...createImages(
    47,
    48,
    brandtsLink,
    'Foto van slaapkamer met rood beddengoed in renovatie in Leuven',
    {
      category: 'Slaapkamer',
      title: 'Slaapkamer',
      prefix: brandtsPrefix,
    },
  ),
];
