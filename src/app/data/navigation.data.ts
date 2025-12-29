export interface INavLink {
  label: string;
  path: string;
}

export const NAV_LINKS: INavLink[] = [
  { label: 'Over Thorbouw', path: '/overThorbouw' },
  { label: "Foto's Realisaties", path: '/fotos' },
  { label: 'Bouwkundig advies', path: '/advies' },
  { label: 'Werkwijze', path: '/werkwijze' },
  { label: 'Projectontwikkeling & Wonen', path: '/projectontwikkeling' },
  { label: 'Contact', path: '/contact' },
];

const navHalfLength = NAV_LINKS.length / 2;

export const LEFT_NAV_LINKS = NAV_LINKS.slice(0, navHalfLength);
export const RIGHT_NAV_LINKS = NAV_LINKS.slice(navHalfLength);
