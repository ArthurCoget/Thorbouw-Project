import { IHeroContent } from '../interfaces/hero-content';
import { IInfoContent } from '../interfaces/info-content';

export const HERO_CONTACT_CONTENT: IHeroContent = {
  variant: 'simple',
  image: 'ContactHero.webp',
  altText: 'Thorbouw',
  title: 'Contact',
};
export const CONTACT_CONTENT = {
  contactTitle: 'Neem zeker contact op, indien u vragen heeft zijn wij er om u te helpen.',
  contactSubTitle:
    'We zijn alle dagen van de week open en in het weekend zijn we in de voormiddag berijkbaar.',
};

export const CONTACT_LIST: IInfoContent[] = [
  {
    id: 'map',
    title: 'Onze Locatie',
    description:
      'U kunt ons vinden op Hoveniersdreef 64, 3001 Heverlee. Klik hier om onze locatie op Google Maps te bekijken.',
    link: 'https://maps.app.goo.gl/jWfsQAAXfc1Zs39F6',
    linkText: 'Bekijk op Google Maps',
    ariaLabel: 'View our location on Google Maps',
  },
  {
    id: 'mail',
    title: 'Contacteer ons via email',
    description:
      'Heeft u vragen of wilt u meer informatie? Stuur ons een email op info@thorbouw.be en we zullen zo snel mogelijk reageren.',
    link: 'mailto:info@thorbouw.be',
    linkText: 'Stuur een email',
    ariaLabel: 'Send us an email',
  },
  {
    id: 'phone',
    title: 'Bel ons',
    description: 'Heeft u vragen of wilt u meer informatie? Bel ons op 0032 475 530 214.',
    link: 'tel:+32475530214',
    linkText: 'Bel ons',
    ariaLabel: 'Call us',
  },
  {
    id: 'whatsapp',
    title: 'Contacteer ons via WhatsApp',
    description: 'Heeft u vragen of wilt u meer informatie? Stuur ons een bericht via WhatsApp.',
    link: 'https://api.whatsapp.com/send?phone=32475530214',
    linkText: 'Stuur een bericht via WhatsApp',
    ariaLabel: 'Contact us on WhatsApp',
  },
  {
    id: 'instagram',
    title: 'Volg ons op Instagram',
    description: "Bekijk onze Instagram-pagina voor de nieuwste updates en foto's.",
    link: 'https://www.instagram.com/thorbouw/',
    linkText: 'Bekijk op Instagram',
    ariaLabel: 'Follow us on Instagram',
  },
];
