import { TextImageContent } from '../interfaces/text-and-image-content';

export const TIMELINE_TITLE_AND_DESCRIPTION_AND_BUTTON = {
  title: 'Thorbouw werkwijze process',
  description:
    'We willen uw ervaringen in de renovatie van uw woning zo goed mogelijk maken. Daarom hebben we een duidelijk proces ontwikkeld dat u stap voor stap begeleidt. Van de eerste kennismaking tot de oplevering en nazorg, we staan altijd klaar om u te ondersteunen en te zorgen dat alles soepel verloopt.',
  buttonText: 'Lees meer',
  buttonLink: '/werkwijze',
  buttonFragment: 'step-1',
};

export const TIMELINE_ITEMS = [
  {
    title: 'Eerste Kennismaking',
    link: '/werkwijze',
    fragment: 'step-1',
    description:
      'Laten we elkaar eens leren kennen. We bespreken uw visie en hoe we kunnen samenwerken. We geven u ook een eerste prijsindicatie, zodat we weten of we op één lijn zitten.',
  },
  {
    title: 'Ontwerp en Offerte',
    link: '/werkwijze',
    fragment: 'step-2',
    description:
      'We ontwerpen samen uw renovatie en doen een offerte. U krijgt een duidelijk overzicht van de kosten en de uitvoering.',
  },
  {
    title: 'Uitvoering',
    link: '/werkwijze',
    fragment: 'step-3',
    description:
      'We starten de renovatie en houden u op de hoogte van de voortgang. We zorgen ervoor dat alles volgens plan verloopt.',
  },
  {
    title: 'Oplevering',
    link: '/werkwijze',
    fragment: 'step-4',
    description:
      'We leveren het project op en zorgen ervoor dat alles naar wens is. We staan klaar om eventuele vragen te beantwoorden en zorgen voor een soepele overgang.',
  },
  {
    title: 'Nazorg',
    link: '/werkwijze',
    fragment: 'step-5',
    description:
      'We bieden nazorg en ondersteuning na de oplevering. We willen ervoor zorgen dat u tevreden bent met het resultaat en staan klaar om eventuele problemen op te lossen.',
  },
];

export const TEXT_AND_IMAGE_CONTENT: TextImageContent[] = [
  {
    id: 'step-1',
    title: 'Eerste Kennismaking',
    image: '/werkwijze/FirstStep.webp',
    imageAlt: 'Foto van een verbouwd huis in de sneeuw',
    blocks: [
      {
        subtitle: 'Uw verhaal, onze start',
        description:
          'Bij Thorbouw begint alles met luisteren. Geen standaardoplossingen, maar een persoonlijke aanpak waarbij uw wensen, levensstijl en toekomstplannen centraal staan. Wij geloven dat een woning meer is dan bouwen alleen – het is een plek waar u jarenlang zorgeloos wil leven.',
      },
      {
        subtitle: 'Eerlijk advies vanaf dag één',
        description:
          'We geven u meteen transparant en realistisch advies. Geen verkooppraatjes, maar duidelijke inzichten in wat haalbaar is binnen uw budget en situatie. Dankzij onze expertise in zowel traditionele als bio-ecologische bouwmethodes begeleiden we u naar de juiste keuzes voor vandaag én morgen.',
      },
    ],
  },
  {
    id: 'step-2',
    title: 'Ontwerp en Offerte',
    image: '/werkwijze/SecondStep.webp',
    imageAlt: 'Foto van een vernieuwde keuken',
    blocks: [
      {
        subtitle: 'Slim en toekomstgericht ontwerp',
        description:
          'We vertalen uw ideeën naar een doordacht ontwerp waarin comfort, energiezuinigheid en esthetiek samenkomen. Door te focussen op oriëntatie, natuurlijke materialen en slimme oplossingen creëren we een woning die niet alleen mooi is, maar ook duurzaam en efficiënt.',
      },
      {
        subtitle: 'Transparantie zonder verrassingen',
        description:
          'U ontvangt een duidelijke offerte met vaste prijs. Alles wordt helder uitgelegd: materialen, werken en planning. Zo weet u exact waar u aan toe bent en komt u nooit voor onverwachte kosten te staan – een aanpak waar eerlijkheid centraal staat.',
      },
    ],
  },
  {
    id: 'step-3',
    title: 'Uitvoering',
    image: '/werkwijze/ThirdStep.webp',
    imageAlt: 'Foto van een verbouwd huis ',
    blocks: [
      {
        subtitle: 'Vakmanschap en nauwgezette opvolging',
        description:
          'Tijdens de uitvoering zorgen wij voor een strakke planning en dagelijkse opvolging van de werf. Ons team van ervaren vakmensen werkt efficiënt en met oog voor detail, zodat uw project perfect wordt gerealiseerd volgens afspraak.',
      },
      {
        subtitle: 'Duurzaam bouwen in de praktijk',
        description:
          'Wij kiezen bewust voor volhoudbare materialen en slimme bouwtechnieken. Door in te zetten op isolatie, natuurlijke ventilatie en doordachte oplossingen vermijden we onnodig complexe technieken en bouwen we een woning die écht toekomstgericht is.',
      },
    ],
  },
  {
    id: 'step-4',
    title: 'Oplevering',
    image: '/werkwijze/FourthStep.webp',
    imageAlt: 'Foto van een verbouwd huis met zicht op de terres and tuin',
    blocks: [
      {
        subtitle: 'Tot in de puntjes afgewerkt',
        description:
          'Bij de oplevering nemen we samen elk detail door. Uw woning wordt afgewerkt zoals afgesproken, tot in de kleinste puntjes. Wij nemen pas genoegen wanneer alles volledig aan uw verwachtingen voldoet.',
      },
      {
        subtitle: 'Klaar voor een zorgeloze toekomst',
        description:
          'U krijgt niet alleen een afgewerkt project, maar een duurzame thuis waarin comfort, energie-efficiëntie en levenskwaliteit centraal staan. Een investering waar u jarenlang van geniet.',
      },
    ],
  },
  {
    id: 'step-5',
    title: 'Nazorg',
    image: '/werkwijze/FifthStep.webp',
    imageAlt: 'Geronoveerde slaapkamer met zicht op de gang',
    blocks: [
      {
        subtitle: 'Blijvende ondersteuning',
        description:
          'Ook na de oplevering blijven wij bereikbaar. Heeft u vragen of wenst u advies? Wij staan voor u klaar. Onze betrokkenheid stopt niet bij de sleuteloverdracht.',
      },
      {
        subtitle: 'Een partner op lange termijn',
        description:
          'Wij bouwen niet alleen woningen, maar ook relaties. Dankzij onze nazorg en opvolging bent u zeker van een partner die met u meedenkt, vandaag én in de toekomst. Dat is voor ons echte kwaliteit en vertrouwen.',
      },
    ],
  },
];
