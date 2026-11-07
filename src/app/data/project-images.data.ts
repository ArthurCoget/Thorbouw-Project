import { createImages } from '../interfaces/iproject-content';

const CATEGORY = {
  exterior: $localize`:@@project.category.exterior:Exterieur`,
  interior: $localize`:@@project.category.interior:Interieur`,
  bathroom: $localize`:@@project.category.bathroom:Badkamer`,
  stairs: $localize`:@@project.category.stairs:Trap`,
  livingRoom: $localize`:@@project.category.livingRoom:Woonkamer`,
  kitchen: $localize`:@@project.category.kitchen:Keuken`,
  diningRoom: $localize`:@@project.category.diningRoom:Eetkamer`,
  bedroom: $localize`:@@project.category.bedroom:Slaapkamer`,
};

const TITLE = {
  hall: $localize`:@@project.title.hall:Hal`,
  diningTable: $localize`:@@project.title.diningTable:Eettafel`,
  livingOverview: $localize`:@@project.title.livingOverview:Overzicht Living`,
  salon: $localize`:@@project.title.salon:Salon`,
  bedroom: $localize`:@@project.title.bedroom:Slaapkamer`,
  living: $localize`:@@project.title.living:Living`,
  entryHall: $localize`:@@project.title.entryHall:Inkom hall`,
  stairsHall: $localize`:@@project.title.stairsHall:Trappen hall`,
  bathroom: $localize`:@@project.title.bathroom:Badkamer`,
  kitchenIsland: $localize`:@@project.title.kitchenIsland:Keuken eiland`,
  kitchen: $localize`:@@project.title.kitchen:Keuken`,
  relaxRoom: $localize`:@@project.title.relaxRoom:Ontspanningsruimte`,
  artStudio: $localize`:@@project.title.artStudio:Art studio`,
  office: $localize`:@@project.title.office:Bureau`,
  laundry: $localize`:@@project.title.laundry:Waskot`,
  wardrobe: $localize`:@@project.title.wardrobe:Klerenkast`,
  hallway: $localize`:@@project.title.hallway:Gang/Hal`,
  sinks: $localize`:@@project.title.sinks:Spoelbakken Badkamer`,
  stairs: $localize`:@@project.title.stairs:Trappen`,
  stairsHallway: $localize`:@@project.title.stairsHallway:Trappen/Hal`,
  roomOffice: $localize`:@@project.title.roomOffice:Kamer/Bureau`,
  livingRoom: $localize`:@@project.title.livingRoom:Woonkamer`,
  veranda: $localize`:@@project.title.veranda:Veranda`,
  diningRoom: $localize`:@@project.title.diningRoom:Eetkamer`,
};

// ─── Justius Lipsius ───────────────────────────────────────────────────

export const IMAGES_JUSTIUS_LIPSIUS = [
  // 1 - 15 (Exterieur)
  ...createImages(
    1,
    15,
    '/fotos&realisaties/JustiusLipsius',
    $localize`:@@project.alt.lipsius.exterior:Foto van renovatie in Leuven exterieur`,
    {
      category: CATEGORY.exterior,
      prefix: 'Justius',
    },
  ),

  ...createImages(
    1,
    1,
    '/fotos&realisaties/JustiusLipsius',
    $localize`:@@project.alt.lipsius.bathroom:Foto van renovatie in Leuven interieur badkamer`,
    {
      category: CATEGORY.interior,
      title: TITLE.bathroom,
      prefix: 'Lipsius',
    },
  ),
  ...createImages(
    2,
    2,
    '/fotos&realisaties/JustiusLipsius',
    $localize`:@@project.alt.lipsius.diningTable:Foto van renovatie in Leuven interieur eettafel`,
    {
      category: CATEGORY.interior,
      title: TITLE.diningTable,
      prefix: 'Lipsius',
    },
  ),
  ...createImages(
    3,
    3,
    '/fotos&realisaties/JustiusLipsius',
    $localize`:@@project.alt.lipsius.hall:Foto van renovatie in Leuven interieur hal`,
    {
      category: CATEGORY.interior,
      title: TITLE.hall,
      prefix: 'Lipsius',
    },
  ),
  ...createImages(
    4,
    5,
    '/fotos&realisaties/JustiusLipsius',
    $localize`:@@project.alt.lipsius.kitchen:Foto van renovatie in Leuven interieur keuken`,
    {
      category: CATEGORY.interior,
      title: TITLE.kitchen,
      prefix: 'Lipsius',
    },
  ),
  ...createImages(
    6,
    8,
    '/fotos&realisaties/JustiusLipsius',
    $localize`:@@project.alt.lipsius.living:Foto van renovatie in Leuven interieur living`,
    {
      category: CATEGORY.interior,
      title: TITLE.living,
      prefix: 'Lipsius',
    },
  ),

  // 9 - 14 (Eettafel)
  ...createImages(
    9,
    13,
    '/fotos&realisaties/JustiusLipsius',
    $localize`:@@project.alt.lipsius.diningTable:Foto van renovatie in Leuven interieur eettafel`,
    {
      category: CATEGORY.interior,
      title: TITLE.diningTable,
      prefix: 'Lipsius',
    },
  ),
  // 15 - 19 (Keuken)
  ...createImages(
    16,
    19,
    '/fotos&realisaties/JustiusLipsius',
    $localize`:@@project.alt.lipsius.kitchenIsland:Foto van renovatie in Leuven interieur overzicht Keuken eiland`,
    {
      category: CATEGORY.interior,
      title: TITLE.kitchenIsland,
      prefix: 'Lipsius',
    },
  ),

  ...createImages(
    20,
    21,
    '/fotos&realisaties/JustiusLipsius',
    $localize`:@@project.alt.lipsius.livingOverview:Foto van renovatie in Leuven interieur overzicht living`,
    {
      category: CATEGORY.interior,
      title: TITLE.livingOverview,
      prefix: 'Lipsius',
    },
  ),
  ...createImages(
    22,
    23,
    '/fotos&realisaties/JustiusLipsius',
    $localize`:@@project.alt.lipsius.salon:Foto van renovatie in Leuven interieur salon`,
    {
      category: CATEGORY.interior,
      title: TITLE.living,
      prefix: 'Lipsius',
    },
  ),

  ...createImages(
    24,
    24,
    '/fotos&realisaties/JustiusLipsius',
    $localize`:@@project.alt.lipsius.bedroom:Foto van renovatie in Leuven interieur slaapkamer`,
    {
      category: CATEGORY.interior,
      title: TITLE.bedroom,
      prefix: 'Lipsius',
    },
  ),
];

// ─── Uten ──────────────────────────────────────────────────────────────

const utenLink = '/fotos&realisaties/Uten';
const utenPrefix = 'Uten';
export const IMAGES_UTEN = [
  ...createImages(
    1,
    1,
    utenLink,
    $localize`:@@project.alt.uten.living:Foto van nieuwbouw in Ottenburg living`,
    {
      category: CATEGORY.interior,
      title: TITLE.living,
      prefix: utenPrefix,
    },
  ),
  ...createImages(
    2,
    16,
    utenLink,
    $localize`:@@project.alt.uten.exterior:Foto van nieuwbouw in Ottenburg exterieur`,
    {
      category: CATEGORY.exterior,
      prefix: utenPrefix,
    },
  ),
  ...createImages(
    17,
    17,
    utenLink,
    $localize`:@@project.alt.uten.entryHall:Foto van nieuwbouw in Ottenburg inkom hall`,
    {
      category: CATEGORY.interior,
      title: TITLE.entryHall,
      prefix: utenPrefix,
    },
  ),
  ...createImages(
    18,
    18,
    utenLink,
    $localize`:@@project.alt.uten.stairsHall:Foto van nieuwbouw in Ottenburg trappen hall`,
    {
      category: CATEGORY.interior,
      title: TITLE.stairsHall,
      prefix: utenPrefix,
    },
  ),
  ...createImages(
    19,
    22,
    utenLink,
    $localize`:@@project.alt.uten.bathroom:Foto van nieuwbouw in Ottenburg badkamer`,
    {
      category: CATEGORY.interior,
      title: TITLE.bathroom,
      prefix: utenPrefix,
    },
  ),
  ...createImages(
    23,
    23,
    utenLink,
    $localize`:@@project.alt.uten.bedroom:Foto van nieuwbouw in Ottenburg slaapkamer`,
    {
      category: CATEGORY.interior,
      title: TITLE.bedroom,
      description: $localize`:@@project.desc.uten.kidsRoom:Renovatie van de kinderkamer`,
      prefix: utenPrefix,
    },
  ),
  ...createImages(
    24,
    24,
    utenLink,
    $localize`:@@project.alt.uten.bedroom:Foto van nieuwbouw in Ottenburg slaapkamer`,
    {
      category: CATEGORY.interior,
      title: TITLE.bedroom,
      prefix: utenPrefix,
    },
  ),
  ...createImages(
    25,
    27,
    utenLink,
    $localize`:@@project.alt.uten.kitchenIsland:Foto van nieuwbouw in Ottenburg keuken eiland`,
    {
      category: CATEGORY.interior,
      title: TITLE.kitchenIsland,
      description: $localize`:@@project.desc.uten.kitchenIsland:Prachtige keuken met een groot eiland in het midden`,
      prefix: utenPrefix,
    },
  ),
  ...createImages(
    28,
    28,
    utenLink,
    $localize`:@@project.alt.uten.kitchen:Foto van nieuwbouw in Ottenburg keuken`,
    {
      category: CATEGORY.interior,
      title: TITLE.kitchen,
      prefix: utenPrefix,
    },
  ),
  ...createImages(
    29,
    29,
    utenLink,
    $localize`:@@project.alt.uten.relaxRoom:Foto van nieuwbouw in Ottenburg ontspanningsruimte`,
    {
      category: CATEGORY.interior,
      title: TITLE.relaxRoom,
      prefix: utenPrefix,
    },
  ),
  ...createImages(
    30,
    30,
    utenLink,
    $localize`:@@project.alt.uten.artStudio:Foto van nieuwbouw in Ottenburg art studio`,
    {
      category: CATEGORY.interior,
      title: TITLE.artStudio,
      prefix: utenPrefix,
    },
  ),
];

// ─── Vandermeulen ──────────────────────────────────────────────────────

const meulenLink = '/fotos&realisaties/Vandermeulen';
const meulenPrefix = 'leuven';
export const IMAGES_MEULEN = [
  ...createImages(
    1,
    3,
    meulenLink,
    $localize`:@@project.alt.meulen.office:Foto van renovatie in Leuven bureau`,
    {
      category: CATEGORY.interior,
      title: TITLE.office,
      prefix: meulenPrefix,
    },
  ),
  ...createImages(
    4,
    5,
    meulenLink,
    $localize`:@@project.alt.meulen.living:Foto van renovatie in Leuven living`,
    {
      category: CATEGORY.interior,
      title: TITLE.living,
      prefix: meulenPrefix,
    },
  ),
  ...createImages(
    6,
    6,
    meulenLink,
    $localize`:@@project.alt.meulen.laundry:Foto van renovatie in Leuven waskot`,
    {
      category: CATEGORY.interior,
      title: TITLE.laundry,
      prefix: meulenPrefix,
    },
  ),
  ...createImages(
    7,
    10,
    meulenLink,
    $localize`:@@project.alt.meulen.kitchen:Foto van renovatie in Leuven keuken`,
    {
      category: CATEGORY.interior,
      title: TITLE.kitchen,
      prefix: meulenPrefix,
    },
  ),
  ...createImages(
    11,
    11,
    meulenLink,
    $localize`:@@project.alt.meulen.wardrobe:Foto van renovatie in Leuven klerenkast`,
    {
      category: CATEGORY.interior,
      title: TITLE.wardrobe,
      prefix: meulenPrefix,
    },
  ),
  ...createImages(
    12,
    14,
    meulenLink,
    $localize`:@@project.alt.meulen.bedroom:Foto van renovatie in Leuven slaapkamer`,
    {
      category: CATEGORY.interior,
      title: TITLE.bedroom,
      prefix: meulenPrefix,
    },
  ),
  ...createImages(
    15,
    17,
    meulenLink,
    $localize`:@@project.alt.meulen.living:Foto van renovatie in Leuven living`,
    {
      category: CATEGORY.interior,
      title: TITLE.living,
      prefix: meulenPrefix,
    },
  ),
  ...createImages(
    18,
    23,
    meulenLink,
    $localize`:@@project.alt.meulen.hallway:Foto van renovatie in Leuven gang/hal`,
    {
      category: CATEGORY.interior,
      title: TITLE.hallway,
      prefix: meulenPrefix,
    },
  ),
  ...createImages(
    24,
    25,
    meulenLink,
    $localize`:@@project.alt.meulen.sinks:Foto van renovatie in Leuven spoelbakken badkamer`,
    {
      category: CATEGORY.interior,
      title: TITLE.sinks,
      prefix: meulenPrefix,
    },
  ),
  ...createImages(
    26,
    27,
    meulenLink,
    $localize`:@@project.alt.meulen.diningTable:Foto van renovatie in Leuven eettafel`,
    {
      category: CATEGORY.interior,
      title: TITLE.diningTable,
      prefix: meulenPrefix,
    },
  ),
];

// ─── Sucaet ────────────────────────────────────────────────────────────

const sucaetLink = '/fotos&realisaties/Sucaet';
const sucaetPrefix = 'heverlee';
export const IMAGES_SUCAET = [
  ...createImages(
    1,
    10,
    sucaetLink,
    $localize`:@@project.alt.sucaet.exterior:Foto van renovatie in Heverlee exterieur`,
    {
      category: CATEGORY.exterior,
      prefix: sucaetPrefix,
    },
  ),
  ...createImages(
    11,
    11,
    sucaetLink,
    $localize`:@@project.alt.sucaet.living:Foto van renovatie in Heverlee living`,
    {
      category: CATEGORY.interior,
      title: TITLE.living,
      description: $localize`:@@project.desc.sucaet.living:Prachtige gezellige living ruimte`,
      prefix: sucaetPrefix,
    },
  ),
  ...createImages(
    12,
    18,
    sucaetLink,
    $localize`:@@project.alt.sucaet.diningRoom:Foto van renovatie in Heverlee eetkamer`,
    {
      category: CATEGORY.interior,
      title: TITLE.diningRoom,
      description: $localize`:@@project.desc.sucaet.diningRoom:Ruime eetkamer met een grote eettafel`,
      prefix: sucaetPrefix,
    },
  ),
  ...createImages(
    19,
    20,
    sucaetLink,
    $localize`:@@project.alt.sucaet.kitchen:Foto van renovatie in Heverlee keuken`,
    {
      category: CATEGORY.interior,
      title: TITLE.kitchen,
      prefix: sucaetPrefix,
    },
  ),
  ...createImages(
    21,
    24,
    sucaetLink,
    $localize`:@@project.alt.sucaet.office:Foto van renovatie in Heverlee bureau`,
    {
      category: CATEGORY.interior,
      title: TITLE.office,
      prefix: sucaetPrefix,
    },
  ),
  ...createImages(
    25,
    25,
    sucaetLink,
    $localize`:@@project.alt.sucaet.stairs:Foto van renovatie in Heverlee trappen`,
    {
      category: CATEGORY.interior,
      title: TITLE.stairs,
      description: $localize`:@@project.desc.sucaet.stairs:Trappen die zich bevinden op de eerste verdieping van de woning met glazen balustrade`,
      prefix: sucaetPrefix,
    },
  ),
  ...createImages(
    26,
    28,
    sucaetLink,
    $localize`:@@project.alt.sucaet.bathroom:Foto van renovatie in Heverlee badkamer`,
    {
      category: CATEGORY.interior,
      title: TITLE.bathroom,
      prefix: sucaetPrefix,
    },
  ),
  ...createImages(
    29,
    32,
    sucaetLink,
    $localize`:@@project.alt.sucaet.bedroom:Foto van renovatie in Heverlee slaapkamer`,
    {
      category: CATEGORY.interior,
      title: TITLE.bedroom,
      prefix: sucaetPrefix,
    },
  ),
  ...createImages(
    33,
    36,
    sucaetLink,
    $localize`:@@project.alt.sucaet.stairsHallway:Foto van renovatie in Heverlee trappen/hal`,
    {
      category: CATEGORY.interior,
      title: TITLE.stairsHallway,
      prefix: sucaetPrefix,
    },
  ),
  ...createImages(
    37,
    45,
    sucaetLink,
    $localize`:@@project.alt.sucaet.exterior:Foto van renovatie in Heverlee exterieur`,
    {
      category: CATEGORY.exterior,
      prefix: sucaetPrefix,
    },
  ),
];

// ─── Verhoef ───────────────────────────────────────────────────────────

const verhoefLink = '/fotos&realisaties/Verhoef';
const verhoefPrefix = 'verhoef';
export const IMAGES_VERHOEF = [
  ...createImages(
    1,
    1,
    verhoefLink,
    $localize`:@@project.alt.verhoef.bathroom:Foto van renovatie in Leuven badkamer`,
    {
      category: CATEGORY.interior,
      title: TITLE.bathroom,
      prefix: verhoefPrefix,
    },
  ),
  ...createImages(
    2,
    2,
    verhoefLink,
    $localize`:@@project.alt.verhoef.roomOffice:Foto van renovatie in Leuven kamer/bureau`,
    {
      category: CATEGORY.interior,
      title: TITLE.roomOffice,
      prefix: verhoefPrefix,
    },
  ),
  ...createImages(
    3,
    3,
    verhoefLink,
    $localize`:@@project.alt.verhoef.livingRoom:Foto van renovatie in Leuven woonkamer`,
    {
      category: CATEGORY.interior,
      title: TITLE.livingRoom,
      prefix: verhoefPrefix,
    },
  ),
  ...createImages(
    5,
    10,
    verhoefLink,
    $localize`:@@project.alt.verhoef.bathroom:Foto van renovatie in Leuven badkamer`,
    {
      category: CATEGORY.interior,
      title: TITLE.bathroom,
      prefix: verhoefPrefix,
    },
  ),
  ...createImages(
    11,
    12,
    verhoefLink,
    $localize`:@@project.alt.verhoef.roomOffice:Foto van renovatie in Leuven kamer/bureau`,
    {
      category: CATEGORY.interior,
      title: TITLE.roomOffice,
      prefix: verhoefPrefix,
    },
  ),
  ...createImages(
    13,
    15,
    verhoefLink,
    $localize`:@@project.alt.verhoef.stairs:Foto van renovatie in Leuven trappen`,
    {
      category: CATEGORY.interior,
      title: TITLE.stairs,
      prefix: verhoefPrefix,
    },
  ),
  ...createImages(
    16,
    19,
    verhoefLink,
    $localize`:@@project.alt.verhoef.veranda:Foto van renovatie in Leuven veranda`,
    {
      category: CATEGORY.interior,
      title: TITLE.veranda,
      prefix: verhoefPrefix,
    },
  ),
  ...createImages(
    20,
    25,
    verhoefLink,
    $localize`:@@project.alt.verhoef.exterior:Foto van renovatie in Leuven exterieur`,
    {
      category: CATEGORY.exterior,
      prefix: verhoefPrefix,
    },
  ),
];

// ─── Brandts ───────────────────────────────────────────────────────────

const brandtsLink = '/fotos&realisaties/BuurBrandts';
const brandtsPrefix = 'brandts';
export const IMAGES_BRANDTS = [
  ...createImages(
    1,
    18,
    brandtsLink,
    $localize`:@@project.alt.brandts.exterior:Foto van renovatie in Leuven exterieur`,
    {
      category: CATEGORY.exterior,
      prefix: brandtsPrefix,
    },
  ),

  ...createImages(
    19,
    19,
    brandtsLink,
    $localize`:@@project.alt.brandts.freestandingBath:Foto van moderne badkamer met vrijstaand bad in renovatie in Leuven`,
    {
      category: CATEGORY.bathroom,
      title: $localize`:@@project.title.brandts.freestandingBath:Vrijstaand bad`,
      description: $localize`:@@project.desc.brandts.freestandingBath:Strakke badkamer met een vrijstaand wit bad tegen een donkere wand, aangevuld met een grote spiegel en ruime lichtinval.`,
      prefix: brandtsPrefix,
    },
  ),
  ...createImages(
    20,
    20,
    brandtsLink,
    $localize`:@@project.alt.brandts.vanity:Foto van badkamer met dubbele wastafel in renovatie in Leuven`,
    {
      category: CATEGORY.bathroom,
      title: $localize`:@@project.title.brandts.vanity:Wastafelmeubel`,
      description: $localize`:@@project.desc.brandts.vanity:Witte badkamer met een zwevend wastafelmeubel, grote spiegelwand en donkere accenten voor een rustige, hedendaagse uitstraling.`,
      prefix: brandtsPrefix,
    },
  ),

  ...createImages(
    21,
    22,
    brandtsLink,
    $localize`:@@project.alt.brandts.cabinetWall:Foto van houten kastenwand met groene accentwand in renovatie in Leuven`,
    {
      category: CATEGORY.interior,
      title: TITLE.office,
      prefix: brandtsPrefix,
    },
  ),

  ...createImages(
    23,
    23,
    brandtsLink,
    $localize`:@@project.alt.brandts.stairHall:Foto van witte trappenhal in renovatie in Leuven`,
    {
      category: CATEGORY.stairs,
      title: $localize`:@@project.title.brandts.stairHall:Trappenhal`,
      description: $localize`:@@project.desc.brandts.stairHall:Lichte trappenhal met witte wanden en natuurlijke lichtinval via een bovenlicht.`,
      prefix: brandtsPrefix,
    },
  ),

  ...createImages(
    24,
    26,
    brandtsLink,
    $localize`:@@project.alt.brandts.stairSkylight:Foto van trap en bovenlicht in renovatie in Leuven`,
    {
      category: CATEGORY.stairs,
      title: $localize`:@@project.title.brandts.stairSkylight:Trap met lichtinval`,
      description: $localize`:@@project.desc.brandts.stairSkylight:Verticaal beeld van de trap met zicht op de verdiepingen en het licht dat binnenvalt.`,
      prefix: brandtsPrefix,
    },
  ),

  ...createImages(
    27,
    27,
    brandtsLink,
    $localize`:@@project.alt.brandts.woodPanel:Foto van houten wandpaneel in interieur van renovatie in Leuven`,
    {
      category: CATEGORY.interior,
      title: $localize`:@@project.title.brandts.woodPanel:Houten wandpaneel`,
      description: $localize`:@@project.desc.brandts.woodPanel:Warm houten wandpaneel dat een zachte contrastlijn vormt met de donkere vloer en witte wanden.`,
      prefix: brandtsPrefix,
    },
  ),
  ...createImages(
    28,
    28,
    brandtsLink,
    $localize`:@@project.alt.brandts.glassDoor:Foto van glazen deur en houten element in renovatie in Leuven`,
    {
      category: CATEGORY.interior,
      title: $localize`:@@project.title.brandts.glassDoor:Glazen deur`,
      description: $localize`:@@project.desc.brandts.glassDoor:Glazen deur en scheidingswand zorgen voor transparantie tussen de ruimtes en laten het licht doorstromen.`,
      prefix: brandtsPrefix,
    },
  ),

  // ─── Woonkamer ──────────────────────────────────────────────
  ...createImages(
    29,
    29,
    brandtsLink,
    $localize`:@@project.alt.brandts.blueSofas:Foto van zithoek met blauwe zetels in renovatie in Leuven`,
    {
      category: CATEGORY.livingRoom,
      title: $localize`:@@project.title.brandts.blueSofas:Zithoek met blauwe zetels`,
      description: $localize`:@@project.desc.brandts.blueSofas:Zitruimte met opvallende blauwe zetels, grote ramen en een lichte, open sfeer.`,
      prefix: brandtsPrefix,
    },
  ),
  ...createImages(
    30,
    30,
    brandtsLink,
    $localize`:@@project.alt.brandts.greenAccentWall:Foto van woonkamer met groene accentwand in renovatie in Leuven`,
    {
      category: CATEGORY.livingRoom,
      title: $localize`:@@project.title.brandts.greenAccentWall:Woonkamer met groene accentwand`,
      description: $localize`:@@project.desc.brandts.greenAccentWall:Overzicht van de woonkamer vanuit een hoge hoek, met een groene accentwand en een geïntegreerde mediawand.`,
      prefix: brandtsPrefix,
    },
  ),
  ...createImages(
    31,
    32,
    brandtsLink,
    $localize`:@@project.alt.brandts.openLiving:Foto van open leefruimte met zetel en eettafel in renovatie in Leuven`,
    {
      category: CATEGORY.livingRoom,
      title: $localize`:@@project.title.brandts.openLiving:Open leefruimte`,
      description: $localize`:@@project.desc.brandts.openLiving:Open leefruimte waarin zitgedeelte en eetruimte vloeiend in elkaar overlopen.`,
      prefix: brandtsPrefix,
    },
  ),
  ...createImages(
    33,
    33,
    brandtsLink,
    $localize`:@@project.alt.brandts.woodKitchen:Foto van keuken met houten werkblad en leefruimte in renovatie in Leuven`,
    {
      category: CATEGORY.kitchen,
      title: $localize`:@@project.title.brandts.woodKitchen:Keuken met houten werkblad`,
      description: $localize`:@@project.desc.brandts.woodKitchen:Moderne keuken met een warm houten werkblad die open uitkomt op de leefruimte.`,
      prefix: brandtsPrefix,
    },
  ),
  ...createImages(
    34,
    35,
    brandtsLink,
    $localize`:@@project.alt.brandts.sittingArea:Foto van woonkamer met zetel en kleuraccenten in renovatie in Leuven`,
    {
      category: CATEGORY.livingRoom,
      title: $localize`:@@project.title.brandts.sittingArea:Zitruimte`,
      description: $localize`:@@project.desc.brandts.sittingArea:Gezellige zitruimte met een grote zetel.`,
      prefix: brandtsPrefix,
    },
  ),
  ...createImages(
    36,
    36,
    brandtsLink,
    $localize`:@@project.alt.brandts.mediaUnit:Foto van mediameubel met houten nis in renovatie in Leuven`,
    {
      category: CATEGORY.livingRoom,
      title: $localize`:@@project.title.brandts.mediaUnit:Mediameubel`,
      prefix: brandtsPrefix,
    },
  ),

  ...createImages(
    37,
    37,
    brandtsLink,
    $localize`:@@project.alt.brandts.longTable:Foto van lange eettafel met stoelen en raampartij in renovatie in Leuven`,
    {
      category: CATEGORY.diningRoom,
      title: $localize`:@@project.title.brandts.longTable:Lange eettafel`,
      description: $localize`:@@project.desc.brandts.longTable:Lange eettafel met stoelen langs een raampartij, perfect voor het samenbrengen van familie en vrienden.`,
      prefix: brandtsPrefix,
    },
  ),
  ...createImages(
    38,
    38,
    brandtsLink,
    $localize`:@@project.alt.brandts.glassView:Foto van glazen doorkijk en trap in renovatie in Leuven`,
    {
      category: CATEGORY.interior,
      title: $localize`:@@project.title.brandts.glassView:Doorkijk met glas`,
      description: $localize`:@@project.desc.brandts.glassView:Verticale doorkijk door glazen elementen, met zicht op de verschillende niveaus van de woning.`,
      prefix: brandtsPrefix,
    },
  ),
  ...createImages(
    39,
    39,
    brandtsLink,
    $localize`:@@project.alt.brandts.diningArea:Foto van eetruimte met tafel en stoelen in renovatie in Leuven`,
    {
      category: CATEGORY.diningRoom,
      title: $localize`:@@project.title.brandts.diningArea:Eetruimte`,
      description: $localize`:@@project.desc.brandts.diningArea:Heldere eetruimte met een tafel en stoelen, afgewerkt in neutrale tinten en met veel natuurlijk licht.`,
      prefix: brandtsPrefix,
    },
  ),
  ...createImages(
    40,
    40,
    brandtsLink,
    $localize`:@@project.alt.brandts.whiteKitchen:Foto van witte keuken met zwarte stoelen in renovatie in Leuven`,
    {
      category: CATEGORY.kitchen,
      title: $localize`:@@project.title.brandts.whiteKitchen:Witte keuken`,
      description: $localize`:@@project.desc.brandts.whiteKitchen:Strakke witte keuken met zwarte stoelen als contrast en een zorgvuldig uitgewerkte, handgreeploze afwerking.`,
      prefix: brandtsPrefix,
    },
  ),
  ...createImages(
    41,
    42,
    brandtsLink,
    $localize`:@@project.alt.brandts.woodTable:Foto van houten tafel met stoelen en glazen wand in renovatie in Leuven`,
    {
      category: CATEGORY.diningRoom,
      title: $localize`:@@project.title.brandts.woodTable:Houten eettafel`,
      description: $localize`:@@project.desc.brandts.woodTable:Massief houten eettafel met stoelen, naast een glazen wand die de ruimtes visueel verbindt.`,
      prefix: brandtsPrefix,
    },
  ),

  ...createImages(
    43,
    43,
    brandtsLink,
    $localize`:@@project.alt.brandts.lightLiving:Foto van zetel in lichte woonkamer in renovatie in Leuven`,
    {
      category: CATEGORY.livingRoom,
      title: $localize`:@@project.title.brandts.lightLiving:Zetel in lichte woonkamer`,
      description: $localize`:@@project.desc.brandts.lightLiving:Ruime zetel in een lichte woonkamer met uitzicht op de tuin via de grote ramen.`,
      prefix: brandtsPrefix,
    },
  ),
  ...createImages(
    44,
    44,
    brandtsLink,
    $localize`:@@project.alt.brandts.gardenView:Foto van woonkamer met zetel en uitzicht op de tuin in renovatie in Leuven`,
    {
      category: CATEGORY.livingRoom,
      title: $localize`:@@project.title.brandts.gardenView:Woonkamer met tuinzicht`,
      description: $localize`:@@project.desc.brandts.gardenView:Zicht op de woonkamer vanuit een schuine hoek, met de zetel, het tapijt en de tuin als achtergrond.`,
      prefix: brandtsPrefix,
    },
  ),

  ...createImages(
    45,
    45,
    brandtsLink,
    $localize`:@@project.alt.brandts.builtInCloset:Foto van witte inbouwkast in renovatie in Leuven`,
    {
      category: CATEGORY.interior,
      title: $localize`:@@project.title.brandts.builtInCloset:Witte inbouwkast`,
      description: $localize`:@@project.desc.brandts.builtInCloset:Naadloos geïntegreerde witte inbouwkast die extra bergruimte biedt zonder de strakke lijnen te verstoren.`,
      prefix: brandtsPrefix,
    },
  ),
  ...createImages(
    46,
    46,
    brandtsLink,
    $localize`:@@project.alt.brandts.railing:Zoom op de keuken.`,
    {
      category: CATEGORY.interior,
      title: TITLE.kitchen,
      prefix: brandtsPrefix,
    },
  ),

  ...createImages(
    47,
    48,
    brandtsLink,
    $localize`:@@project.alt.brandts.bedroom:Foto van slaapkamer met rood beddengoed in renovatie in Leuven`,
    {
      category: CATEGORY.bedroom,
      title: TITLE.bedroom,
      prefix: brandtsPrefix,
    },
  ),
];
