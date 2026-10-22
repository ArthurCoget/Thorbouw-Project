import { IHeroContent } from '../interfaces/hero-content';
import { ITextRouselContent } from '../interfaces/itext-rousel-content';
import { ITripleText } from '../interfaces/itriple-text';

export const HERO_ABOUT_CONTENT: IHeroContent = {
  variant: 'simple',
  image: 'AboutHeroPage.webp',
  altText: $localize`:@@about.hero.alt:Het Thorbouw team werkt aan een duurzaam bouwproject`,
  title: $localize`:@@about.hero.title:Over Thorbouw`,
};

export const ABOUT_CONTENT = {
  aboutTopTitle: $localize`:@@about.top.title:Wie Zijn We?`,
  aboutTopSubText: $localize`:@@about.top.subtext:Welkom bij Thorbouw, uw betrouwbare bouwpartner en algemeen aannemersbedrijf met een visie op de toekomst en een groot hart voor de volgende generaties. Persoonlijk en milieubewust aankopen, bouwen, renoveren, inrichten of ontwikkelen in Leuven en ruime omgeving. Ruime ervaring in zowel traditionele als bio-ecologische bouwtechnieken.`,
  numberOfProjectsLabel: $localize`:@@about.top.projects.label:Afgeleverde Projecten`,
  numberOfProjects: $localize`:@@about.top.projects.number:50`,
  aboutBottomTitle: $localize`:@@about.bottom.title:Herkent u zich in de visie van Thorbouw?`,
  contactLinkText: $localize`:@@about.bottom.contact.link:Herkenbaar? Neem contact met ons op!`,
};

export const ABOUT_BOTTOM_LIST = [
  $localize`:@@about.bottom.list.1:Volhoudbaar: Thorbouw werkt in het nu, met een blik op morgen.`,
  $localize`:@@about.bottom.list.2:Eerlijk: Duiding in het verschil tussen traditionele en bio-ecologische bouwtechnieken zodat je een gefundeerde keuze kan maken als klant.`,
  $localize`:@@about.bottom.list.3:Correcte prijszetting waarbij aan alles gedacht wordt.`,
  $localize`:@@about.bottom.list.4:Low tech: M.a.w. eerst inzetten op de isolatieschil en zo weinig mogelijk technieken gebruiken om tot een energiezuinige woning te komen.`,
  $localize`:@@about.bottom.list.5:Natuurlijk: respect voor fauna en flora en fascinatie voor water.`,
  $localize`:@@about.bottom.list.6:Haalbaar: traditioneel of bio-ecologisch wonen zonder extreme ingrepen binnen je eigen grenzen en mogelijkheden.`,
  $localize`:@@about.bottom.list.7:Familiaal: de bewoner met zijn/haar ritme, waarden en gezin staan voorop.`,
];

export const ABOUT_VALUES: ITextRouselContent[] = [
  {
    id: 1,
    title: $localize`:@@about.values.1.title:Ontzorging`,
    description: $localize`:@@about.values.1.description:Bij Thorbouw nemen we de volledige verantwoordelijkheid voor uw bouwproject, van begin tot eind. We zorgen ervoor dat alles soepel verloopt, zodat u zich geen zorgen hoeft te maken.`,
    svg: '/aboutImages/PieceOfMind.svg',
  },
  {
    id: 2,
    title: $localize`:@@about.values.2.title:Budget`,
    description: $localize`:@@about.values.2.description:We begrijpen dat budgettering cruciaal is voor elk bouwproject. Daarom werken we nauw samen met onze klanten om ervoor te zorgen dat we binnen het afgesproken budget blijven, zonder concessies te doen aan de kwaliteit.`,
    svg: '/aboutImages/Budget.svg',
  },
  {
    id: 3,
    title: $localize`:@@about.values.3.title:Naleving`,
    description: $localize`:@@about.values.3.description:We zorgen ervoor dat alle bouwactiviteiten voldoen aan de relevante wet- en regelgeving, zodat uw project veilig en legaal wordt uitgevoerd.`,
    svg: '/aboutImages/Compliance.svg',
  },
  {
    id: 4,
    title: $localize`:@@about.values.4.title:Coördinatie`,
    description: $localize`:@@about.values.4.description:We coördineren alle aspecten van het bouwproces, van de planning tot de uitvoering, om ervoor te zorgen dat alles op tijd en volgens plan verloopt.`,
    svg: '/aboutImages/Coordination.svg',
  },
  {
    id: 5,
    title: $localize`:@@about.values.5.title:Planning`,
    description: $localize`:@@about.values.5.description:We maken gedetailleerde planningen voor elk project, zodat u altijd weet wat waar en wanneer gebeurt. We zorgen ervoor dat alle werkzaamheden op elkaar zijn afgestemd voor een efficiënte uitvoering.`,
    svg: '/aboutImages/Planning.svg',
  },
  {
    id: 6,
    title: $localize`:@@about.values.6.title:Verantwoordelijkheid`,
    description: $localize`:@@about.values.6.description:We nemen volledige verantwoordelijkheid over de kwaliteit van ons werk en de tevredenheid van onze klanten. We streven ernaar om elk project tot een succesvol einde te brengen.`,
    svg: '/aboutImages/Responsibility.svg',
  },
  {
    id: 7,
    title: $localize`:@@about.values.7.title:Begeleiding`,
    description: $localize`:@@about.values.7.description:We bieden uitgebreide begeleiding gedurende het hele bouwproces, vanaf het eerste verkennend gesprek tot de uiteindelijke oplevering, om ervoor te zorgen dat uw visie werkelijkheid wordt.`,
    svg: '/aboutImages/Guidance.svg',
  },
  {
    id: 8,
    title: $localize`:@@about.values.8.title:Kwalitatief`,
    description: $localize`:@@about.values.8.description:Kwaliteit staat bij ons voorop. We gebruiken alleen de beste materialen en werken met ervaren vakmensen om ervoor te zorgen dat elk project van de hoogste kwaliteit is.`,
    svg: '/aboutImages/Quality.svg',
  },
];

const START_YEAR = 1994;

export const ABOUT_MORE_US: ITripleText[] = [
  {
    id: 1,
    title: $localize`:@@about.more.1.title:Ervaren, oprecht en gepassioneerd`,
    description_one: $localize`:@@about.more.1.description_one:Met meer dan ${new Date().getFullYear() - START_YEAR} jaar ervaring in de bouwsector en een groeiend bewustzijn rond milieu-impact en duurzaamheid, ontstond de drang om het anders aan te pakken. In september 2018 startte daarom de opleiding “Bio Ecologisch Bouwen” aan Odisee, KU Leuven, met als doel bewuster en toekomstgericht te bouwen.`,
    desctiption_two: $localize`:@@about.more.1.description_two:Eind 2018 lanceert hij dan de Bvba Thorbouw: een ecologisch bouwbedrijf dat een rechtlijnige, transparante en persoonlijke aanpak hanteert. Met Thorbouw wil hij niet alleen vandaag inzetten op puur bouwen en comfortabel wonen, maar ook investeren in morgen en een zorgeloos leven voor de volgende generaties, met aandacht voor mens, natuur en omgeving.`,
  },
  {
    id: 2,
    title: $localize`:@@about.more.2.title:Jong, ambitieus en nieuwsgierig`,
    description_one: $localize`:@@about.more.2.description_one:Ondanks onze ervaring in nieuwbouw, renovaties en verbouwingen blijven we bewust jong en gedreven in onze aanpak. Onze ambitie en nieuwsgierigheid zorgen ervoor dat we continu willen bijleren en groeien, met aandacht voor kwaliteit, detail en een sterke betrokkenheid bij elk project dat we realiseren.`,
    desctiption_two: $localize`:@@about.more.2.description_two:Deze ingesteldheid zien we ook terug in onze projecten, waar we voortdurend op zoek gaan naar innovatieve oplossingen en duurzame materialen. Zo combineren we nieuwe inzichten met praktijkervaring om onze klanten een kwalitatief, toekomstgericht en doordacht eindresultaat te bieden.`,
  },
  {
    id: 3,
    title: $localize`:@@about.more.3.title:Goed omringd, deskundig en professioneel`,
    description_one: $localize`:@@about.more.3.description_one:We kunnen rekenen op een sterk netwerk van deskundigen en betrouwbare partners, elk met hun eigen specialisatie binnen de bouwsector. Deze samenwerkingen stellen ons in staat om kennis te delen en elk project te ondersteunen met de juiste expertise, van voorbereiding tot uitvoering.`,
    desctiption_two: $localize`:@@about.more.3.description_two:Dankzij deze sterke samenwerkingen kunnen we elk project met vertrouwen aanpakken en tot in detail uitwerken. We waken over kwaliteit, budget en planning, zodat het eindresultaat niet alleen technisch klopt, maar ook volledig aansluit bij de verwachtingen van de klant.`,
  },
];
