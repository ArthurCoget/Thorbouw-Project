import { IHeroContent } from '../interfaces/hero-content';
import { IPillar } from '../interfaces/pillar';
import { ICarouselImage } from '../interfaces/carousel-image';

export const HOME_HERO_CONTENT: IHeroContent = {
  variant: 'complete',
  image: 'LandingHero.webp',
  altText:
    'Modern sustainable house built with wood and glass showcasing eco-friendly architecture',
  title: 'Volhoudbaar bouwen aan een nieuwe wereld',
  subtitle: 'Aanemer gezocht?',
  buttonText: 'Contacteer Thorbouw voor Volhoudbaar wonen',
  buttonLink: '/contact',
};

export const HOME_PILLARS: IPillar[] = [
  {
    id: '1',
    title: 'Duurzaam Wonen',
    description:
      'Uw huis omtoveren tot energiezuinige thuis? Toekomstgericht bouwen? Kleiner wonen? Thorbouw is gespecialiseerd in volhoudbaar (ver)bouwen & inrichten.',
    imageSrc: '/three-images/Three-Image-2.webp',
    link: '/projectontwikkeling',
    linkText: 'Investeer in milieubewust wonen',
  },
  {
    id: '2',
    title: 'Projectontwikkeling',
    description:
      'Leegstaand pand of een stuk grond te verkavelen? Zin in cohousing of samenhuizen? Thorbouw zet zijn schouders onder uw vooruitstrevend bouwproject.',
    imageSrc: '/three-images/Three-Image-1.webp',
    link: '/projectontwikkeling',
    linkText: 'Maak kennis met onze projectaanpak',
  },
  {
    id: '3',
    title: 'Bouwkundig Advies',
    description:
      'Stap van uw woonverhaal in Leuven & ruime omgeving. Wij vergezellen u met eerlijke feedback tijdens een huisbezichtiging.',
    imageSrc: '/three-images/Three-Image-3.webp',
    link: '/advies',
    linkText: 'Laat u duurzaam adviseren',
  },
];

export const CAROUSEL_IMAGES: ICarouselImage[] = [
  {
    id: 1,
    img: 'verbouwing-linden/VerbouwingLinden-Carousel.webp',
    title: 'Verbouwing in Linden',
    date: '06/2018',
  },
  { id: 6, img: '/placeholder/1-placeholder.webp', title: 'Garden Office', date: '05/2022' },
  { id: 2, img: '/placeholder/2-placeholder.webp', title: 'Modern Glasshouse', date: '09/2019' },
  { id: 3, img: '/placeholder/3-placeholder.webp', title: 'Classic Renovation', date: '02/2020' },
  { id: 4, img: '/placeholder/4-placeholder.webp', title: 'City Loft', date: '11/2021' },
  { id: 5, img: '/placeholder/5-placeholder.webp', title: 'Garden Office', date: '05/2022' },
];

export const HOME_CONTENT = {
  topContainerTextBlue:
    'Groen bouwen of traditioneel of een combinatie van beiden? Energiezuinige woning of appartement kopen? Milieubewust renoveren of inrichten?',
  topContainerText:
    'Duurzame aannemer Thorbouw deelt met véél plezier zijn eindeloze passie voor vol te houden woonvormen oftewel ‘volhoudbaar wonen’. Wij bouwen, renoveren en ontwikkelen voor een vaste prijs en volgens uw budget uw zorgeloze thuis en een duurzame toekomst in Vlaams-Brabant. ',
  middleTitle: 'Van meubel tot verbouwingen met totaalinrichting.',
  middleText:
    'Hebt u interesse? Neem zeker een kijkje door onze vorige projecten voor wat meer informatie.',
  bottomTitle: 'Wist u dat?',
  bottomTextIntro:
    'De Zuid-Afrikaanse taal zit boordevol warme termen, zoals volhoudbaar wat letterlijk duurzaam betekent. Met een volhoudbare aanpak respecteren ze oorsprong, houden ze vol in hetnu en zorgen ze dat het houdbaar blijft voor wie na hen komt.',
  bottomTextMiddle:
    'Het verschil tussen duurzaam en volhoudbaar? Duurzaam is niet noodzakelijk ecologisch. Denk bijvoorbeeld aan tuinmeubilair uit gerecycleerde pvc in je tuin. Na jaren buiten in weer en wind zit uw tuin vol microplastic. Thorbouw licht alle voor- en nadelen toe van de verschillende materialen, zodat je als klant een voor jezelf verantwoorde keuze kan maken. Wie kiest voor een volhoudbare aanpak, maakt de juiste keuze voor zichzelf, de volgende generaties en onze planeet. Deze wijze spreuk van de Canadese Haida indianen vat het perfect samen: „We erven de wereld niet van onze ouders, maar lenen de wereld van onze kinderen.”',
  bottomTextEnd:
    'Als aannemersbedrijf in Leuven zetten wij 100% in op toekomstgericht wonen. We adviseren haalbare ingrepen, betaalbare energie-oplossingen en zowel traditionele als natuurlijke bouwmaterialen. Ethiek en integriteit houden wij hoog in het vaandel, onze klanten correct informeren maakt deel uit van onze werkwijze.',
  bottomTextConclusionBeforeLink:
    'Algemeen aannemer en binnenhuisarchitect Jan Vansteenwegen begeleidt u, samen met de ',
  bottomTextConclusionAfterLink:
    ', naar een huis, appartement, kangoeroewoning of nieuwbouwproject met respect voor onze planeet en met veel liefde voor de volgende generatie Leuvenaars. Wij bieden u het volledige totaalpakket: woningbouw, verbouwing, inrichting, meubilair en tuin. Volledig op uw maat en met oog voor het milieu.',
  bottomTextConlcusionLink: 'North South Architecten',
};
