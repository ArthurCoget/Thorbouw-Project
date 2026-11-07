export interface INavLink {
  label: string;
  path: string;
}

export const NAV_LINKS: INavLink[] = [
  { label: $localize`:@@nav.overThorbouw:Over Thorbouw`, path: '/overThorbouw' },
  { label: $localize`:@@nav.werkwijze:Werkwijze`, path: '/werkwijze' },
  { label: $localize`:@@nav.fotos:Foto's Realisaties`, path: '/fotos' },
  { label: $localize`:@@nav.advies:Bouwkundig advies`, path: '/advies' },
  /*  { label: $localize`:@@nav.projectontwikkeling:Projectontwikkeling & Wonen`, path: '/projectontwikkeling' },*/
  { label: $localize`:@@nav.contact:Contact`, path: '/contact' },
];

const navHalfLength = Math.ceil(NAV_LINKS.length / 2);

export const LEFT_NAV_LINKS = NAV_LINKS.slice(0, navHalfLength);
export const RIGHT_NAV_LINKS = NAV_LINKS.slice(navHalfLength);
