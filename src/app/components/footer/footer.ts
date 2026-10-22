import {
  Component,
  DestroyRef,
  inject,
  Inject,
  PLATFORM_ID,
  Input,
  HostBinding,
} from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();

  private readonly FOOTER_IMAGE_PATH = '/footer';
  private readonly FOOTER_SVG_PATH = '/footer/svg';
  private readonly footerImages = [
    'FooterImage1.webp',
    'FooterImage2.webp',
    'FooterImage3.webp',
    'FooterImage4.webp',
  ];

  @Input() overlap = false;

  @HostBinding('class.overlap-mode') get overlapMode() {
    return this.overlap;
  }

  currentImageIndex = 0;
  currentImage = `${this.FOOTER_IMAGE_PATH}/${this.footerImages[this.currentImageIndex]}`;

  private destroyRef = inject(DestroyRef);

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngOnInit(): void {
    this.initializeImageRotation();
  }

  private initializeImageRotation(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.router.events
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter((event) => event instanceof NavigationEnd),
      )
      .subscribe(() => this.rotateBackgroundImage());
  }

  private rotateBackgroundImage(): void {
    let index: number;
    do {
      index = Math.floor(Math.random() * this.footerImages.length);
    } while (index === this.currentImageIndex);

    this.currentImageIndex = index;
    this.currentImage = `${this.FOOTER_IMAGE_PATH}/${this.footerImages[this.currentImageIndex]}`;
  }

  openSections: Record<string, boolean> = {
    quicklinks: false,
    contact: false,
    stayConnected: false,
  };
  toggleSection(section: string): void {
    this.openSections[section] = !this.openSections[section];
  }

  readonly navLinks = [
    { route: '/home', label: $localize`:@@footer.nav.home:Home Pagina` },
    { route: '/overThorbouw', label: $localize`:@@footer.nav.about:Over Thorbouw` },
    { route: '/fotos', label: $localize`:@@footer.nav.photos:Foto's & Realisaties` },
    { route: '/advies', label: $localize`:@@footer.nav.advice:Bouwkundig Advies` },
    { route: '/werkwijze', label: $localize`:@@footer.nav.process:Werkwijze` },
    /*{
      route: '/project',
      label: $localize`:@@footer.nav.project:Projectontwikkeling & Wonen`,
    },*/
    { route: '/contact', label: $localize`:@@footer.nav.contact:Contact` },
    /*
    { route: '/privacy', label: 'Privacy' },
    { route: '/voorwaarde', label: 'Algemene Voorwaarden' },*/
    { route: '/sitemap', label: $localize`:@@footer.nav.sitemap:Sitemap` },
  ];

  readonly contactInfo = [
    {
      id: 'map',
      icon: `${this.FOOTER_SVG_PATH}/map.svg`,
      href: 'https://maps.app.goo.gl/jWfsQAAXfc1Zs39F6',
      text: ['Hoveniersdreef 64', '3001 Heverlee'],
      ariaLabel: $localize`:@@footer.contact.map.ariaLabel:Bekijk onze locatie op Google Maps`,
      alt: $localize`:@@footer.contact.map.alt:Google Maps-icoon`,
    },
    {
      id: 'mail',
      icon: `${this.FOOTER_SVG_PATH}/mail.svg`,
      href: 'mailto:info@thorbouw.be',
      text: ['info@thorbouw.be'],
      ariaLabel: $localize`:@@footer.contact.mail.ariaLabel:Stuur ons een e-mail`,
      alt: $localize`:@@footer.contact.mail.alt:E-mail-icoon`,
    },
    {
      id: 'phone',
      icon: `${this.FOOTER_SVG_PATH}/phone.svg`,
      href: 'tel:+32475530214',
      text: ['0032 475 530 214'],
      ariaLabel: $localize`:@@footer.contact.phone.ariaLabel:Bel ons`,
      alt: $localize`:@@footer.contact.phone.alt:Telefoon-icoon`,
    },
  ];

  readonly socialLinks = [
    {
      id: 'whatsapp',
      icon: `${this.FOOTER_SVG_PATH}/whatsapp.svg`,
      href: 'https://api.whatsapp.com/send?phone=32475530214',
      text: ['WhatsApp'],
      ariaLabel: $localize`:@@footer.social.whatsapp.ariaLabel:Neem contact met ons op via WhatsApp`,
      alt: $localize`:@@footer.social.whatsapp.alt:WhatsApp-icoon`,
    },
    {
      id: 'vibe',
      icon: `${this.FOOTER_SVG_PATH}/VIBE-logo.svg`,
      href: 'https://www.vibe.be/',
      text: ['Vibe'],
      ariaLabel: $localize`:@@footer.social.vibe.ariaLabel:Vind ons op Vibe`,
      alt: $localize`:@@footer.social.vibe.alt:Vibe-icoon`,
    },
    {
      id: 'instagram',
      icon: `${this.FOOTER_SVG_PATH}/instagram.svg`,
      href: 'https://www.instagram.com/thorbouw/',
      text: ['Instagram'],
      ariaLabel: $localize`:@@footer.social.instagram.ariaLabel:Volg ons op Instagram`,
      alt: $localize`:@@footer.social.instagram.alt:Instagram-icoon`,
    },
    {
      id: 'linkedin',
      icon: `${this.FOOTER_SVG_PATH}/LinkedIn.svg`,
      href: 'https://www.linkedin.com/in/3-100-thorbouw/',
      text: ['LinkedIn'],
      ariaLabel: $localize`:@@footer.social.linkedin.ariaLabel:Volg ons op LinkedIn`,
      alt: $localize`:@@footer.social.linkedin.alt:LinkedIn-icoon`,
    },
  ];
}
