import { IHeroContent } from '../interfaces/hero-content';
import { IInfoContent } from '../interfaces/info-content';

export const HERO_CONTACT_CONTENT: IHeroContent = {
  variant: 'simple',
  image: 'ContactHero.webp',
  altText: $localize`:@@contact.hero.alt:Thorbouw`,
  title: $localize`:@@contact.hero.title:Contact`,
};

export const CONTACT_CONTENT = {
  contactTitle: $localize`:@@contact.top.title:Neem zeker contact op. Indien u vragen heeft zijn wij er om u te helpen.`,
  contactSubTitle: $localize`:@@contact.top.subtitle:We helpen u met plezier verder.`,
};

export const CONTACT_LIST: IInfoContent[] = [
  {
    id: 'map',
    title: $localize`:@@contact.list.map.title:Onze Locatie`,
    description: $localize`:@@contact.list.map.description:U kunt ons vinden op <b>Hoveniersdreef 64, 3001 Heverlee</b>. Klik hier om onze locatie op Google Maps te bekijken.`,
    link: 'https://maps.app.goo.gl/jWfsQAAXfc1Zs39F6',
    linkText: $localize`:@@contact.list.map.linkText:Bekijk op Google Maps`,
    ariaLabel: $localize`:@@contact.list.map.aria:View our location on Google Maps`,
  },
  {
    id: 'phone',
    title: $localize`:@@contact.list.phone.title:Snelste manier om ons te bereiken: Bel ons`,
    description: $localize`:@@contact.list.phone.description:Heeft u vragen of wilt u meer informatie? Bel ons op <b>0032 475 530 214</b>.`,
    link: 'tel:+32475530214',
    linkText: $localize`:@@contact.list.phone.linkText:Bel ons`,
    ariaLabel: $localize`:@@contact.list.phone.aria:Call us`,
  },
  {
    id: 'mail',
    title: $localize`:@@contact.list.mail.title:Contacteer ons via email`,
    description: $localize`:@@contact.list.mail.description:Heeft u vragen of wilt u meer informatie? Stuur ons een email op <b>info@thorbouw.be</b> en we zullen zo snel mogelijk reageren.`,
    link: 'mailto:info@thorbouw.be',
    linkText: $localize`:@@contact.list.mail.linkText:Stuur een email`,
    ariaLabel: $localize`:@@contact.list.mail.aria:Send us an email`,
  },
  /*
  {
    id: 'whatsapp',
    title: $localize`:@@contact.list.whatsapp.title:Contacteer ons via WhatsApp`,
    description: $localize`:@@contact.list.whatsapp.description:Heeft u vragen of wilt u meer informatie? Stuur ons een bericht via WhatsApp.`,
    link: 'https://api.whatsapp.com/send?phone=32475530214',
    linkText: $localize`:@@contact.list.whatsapp.linkText:Stuur een bericht via WhatsApp`,
    ariaLabel: $localize`:@@contact.list.whatsapp.aria:Contact us on WhatsApp`,
  },
  */
  {
    id: 'instagram',
    title: $localize`:@@contact.list.instagram.title:Volg ons op Instagram`,
    description: $localize`:@@contact.list.instagram.description:Bekijk onze Instagram-pagina voor de nieuwste updates en foto's.`,
    link: 'https://www.instagram.com/thorbouw/',
    linkText: $localize`:@@contact.list.instagram.linkText:Bekijk op Instagram`,
    ariaLabel: $localize`:@@contact.list.instagram.aria:Follow us on Instagram`,
  },
  {
    id: 'LinkedIn',
    title: $localize`:@@contact.list.linkedin.title:Volg ons op LinkedIn`,
    description: $localize`:@@contact.list.linkedin.description:Bekijk onze LinkedIn-pagina voor de nieuwste updates en foto's.`,
    link: 'https://www.linkedin.com/in/3-100-thorbouw/',
    linkText: $localize`:@@contact.list.linkedin.linkText:Bekijk op LinkedIn`,
    ariaLabel: $localize`:@@contact.list.linkedin.aria:Follow us on LinkedIn`,
  },
];
