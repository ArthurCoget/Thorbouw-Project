import { TextImageContent } from '../interfaces/text-and-image-content';

export const TIMELINE_TITLE_AND_DESCRIPTION_AND_BUTTON = {
  title: 'Thorbouw werkwijze process',
  description:
    'We willen uw ervaringen in renovatie, inrichting en tuinaanleg van uw woning zo goed mogelijk maken. Daarom hebben we een duidelijk proces ontwikkeld dat u in 4 stappen begeleid. Van de eerste kennismaking tot de oplevering en nazorg, we staan altijd klaar om u te ondersteunen en te zorgen dat alles soepel verloopt.',
  buttonText: 'Lees meer',
  buttonLink: '/werkwijze',
  buttonFragment: 'step-1',
};

export const TIMELINE_ITEMS = [
  {
    title: 'Raming',
    link: '/werkwijze',
    fragment: 'step-1',
    description:
       'Onze eerste kennismaking is in de vorm van een raming, hier komen we langs en legt u uw plannen voor.',
      //'
  },
  {
    title: 'Voorstudie',
    link: '/werkwijze',
    fragment: 'step-2',
    description:
      'We maken een voorontwerp, dan passen we dit aan tot alles naar jullie wens is uitgetekend.',
  },
  {
    title: 'Contractfase',
    link: '/werkwijze',
    fragment: 'step-3',
    description:
      'Hier steken we de armen uit de mouwen en maken we uw project realiteit.',
  },
  {
    title: 'Nazorg',
    link: '/werkwijze',
    fragment: 'step-4',
    description:
      'We bieden nazorg en ondersteuning na de oplevering. We willen ervoor zorgen dat u tevreden bent met het resultaat en staan altijd voor u klaar.',
  },
];

export const TEXT_AND_IMAGE_CONTENT: TextImageContent[] = [
  {
    id: 'step-1',
    title: 'Raming',
    image: '/werkwijze/FirstStep.webp',
    imageAlt: 'Foto van een verbouwd huis in de sneeuw',
    blocks: [
      {
        subtitle: 'Onze samenwerking',
        description: 'begint met het in kaart brengen van uw wensen en het opstellen van een gedetailleerde lijst met een geraamd totaalbudget.  Of u al een vast budget heeft of dat wij een schatting voor u maken, de eerste stap kost slechts €75/u ex btw. Dit bedrag dient als voorschot voor de voorstudie en het wordt ook opgenomen in het totaalbudget van uw project.',
      },
      {
        subtitle: 'Eerlijk advies',
        description: 'is onze toewijding vanaf het eerste moment. We geven u transparant en realistisch advies, geen verkooppraatjes. Duidelijke inzichten in wat haalbaar is binnen uw budget en situatie zorgt voor een project afgeleverd zonder concessies in kwaliteit.',
      },
      {
        subtitle: 'Met onze expertise',
        description: 'in zowel traditionale als bio-ecologische bouwmethodes begeleiden we u naar de juiste keuzes voor vandaag en morgen.',
      },
    ],
  },
  {
    id: 'step-2',
    title: 'Voorstudie',
    image: '/werkwijze/SecondStep.webp',
    imageAlt: 'Foto van een vernieuwde keuken',
    blocks: [
      {
        subtitle: 'Na het bepalen van het budget',
        description:
          'gaan we gezamenlijk aan de slag met de voorstudie.  Tijdens deze studie worden, in samenspraak met u, plannen gemaakt die naadloos aansluiten op het eerder vastgestelde budget en uw wensen. Het opstellen van deze plannen gebeurd stapsgewijs, eerst een voorontwerp en dan verschillende aanpassingen tot alles naar jullie wens is uitgetekend.  Ook deze som, die je betaald voor deze voorstudie, zit inbegrepen in het totaalbudget.',
      },
      {
        subtitle: 'U ontvangt',
        description:
          'een duidelijke offerte met 1 vaste prijs. Alles wordt helder uitgelegd: materialen, werken en planning. Zo weet u exact waar u aan toe bent en komt u nooit voor onverwachte kosten te staan. Een aanpak waar eerlijkheid centraal staat.',
      },
      {
        subtitle: 'De voorstudie',
        description:
          'kost €3.500 a €5.000 ex btw, afhankelijk van de grootte van uw project. Zo bespaart u geld in het opstellen van een kleiner project.',
      },
    ],
  },
  {
    id: 'step-3',
    title: 'Contractfase',
    image: '/werkwijze/ThirdStep.webp',
    imageAlt: 'Foto van een verbouwd huis ',
    blocks: [
      {
        subtitle: 'Deze Stap',
        description:
          'is een volledige ontzorging van A tot Z.  Nu we het exacte budget kennen en uw wensen volledig in kaart en op plan hebben gezet tijdens de voorstudie, gaan we over naar de contractfase.  Tijdens deze fase worden de gemaakte plannen gefinaliseerd en ingediend bij de stad.  Wij bepalen eveneens samen de laatste details, stellen een realistische timing voorop en zorgen voor een vlekkeloze uitvoering en opvolging van al de nodige werken.  Van plaatsbeschrijvingen tot vergunningsaanvragen, van ABR-verzekering tot praktische voorzieningen zoals toilet en aanvraag, plaatsing en keuring van de tijdelijke werfkast, het controleren van alle belangrijke details, wij regelen het allemaal.',
      },
      {
        subtitle: 'Uw project',
        description:
          'is in goede handen. Wij staan garant voor een zorgeloos proces van begin tot eind. Ook tijdens de contractfase staan wij open voor aanpassingen en opmerkingen.',
      },
      {
        subtitle: 'Tijdens de uitvoering',
        description:
          'zorgen wij voor een strakke planning en dagelijkse opvolging van de werf. Ons team van ervaren vakmensen werkt efficiënt en met oog voor detail, zodat uw project perfect volgens afspraak gerealiseerd wordt.',
      },
    ],
  },
  // nazorg is niet in de originele uitleg manier van werken, maar voeg ik toe
  {
    id: 'step-4',
    title: 'Nazorg',
    image: '/werkwijze/FourthStep.webp',
    imageAlt: 'Foto van een verbouwd huis met zicht van het terras op de tuin',
    blocks: [
      {
        subtitle: 'Klaar voor een zorgenloze toekomst',
        description:
          'U krijgt niet alleen een afgewerkt project, maar een duurzame thuis waarin comfort, energie-efficiëntie en levenskwaliteit centraal staan. Een investering waar u jarenlang van geniet.',
      },
      {
        subtitle: 'We blijven bereikbaar',
        description:
          'na de oplevering blijven we open voor vragen, advies of gedachteveranderingen. Als u uw project later nog wil uitbreiden of aanpassen kunt u dus zeker bij ons terecht, zo kunnen we meteen verder.',
      },
    ],
  },
];
