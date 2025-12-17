import { Component, DestroyRef, inject, Inject, PLATFORM_ID } from '@angular/core';
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
  private readonly FOOTER_IMAGE_PATH = '/footer';
  private readonly FOOTER_SVG_PATH = '/footer/svg';
  private readonly footerImages = [
    'FooterImage1.webp',
    'FooterImage2.webp',
    'FooterImage3.webp',
    'FooterImage4.webp',
  ];

  currentImageIndex = 0;
  currentImage = `${this.FOOTER_IMAGE_PATH}/${this.footerImages[this.currentImageIndex]}`;

  private destroyRef = inject(DestroyRef);

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {}

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
        filter((event) => event instanceof NavigationEnd)
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

  readonly navLinks = [
    { route: '/home', label: 'Home Pagina' },
    { route: '/about', label: 'Over Thorbouw' },
    { route: '/fotos', label: "Foto's & Realisitaties" },
    { route: '/advies', label: 'Bouwkunding Advies' },
    { route: '/werkwijze', label: 'Werkwijze' },
    { route: '/project', label: 'Projectontwikkiling & Wonen' },
    { route: '/contact', label: 'Contact' },
    { route: '/privacy', label: 'Privacy' },
    { route: '/voorwaarde', label: 'Algemene Voorwaarde' },
    { route: '/sitemap', label: 'Sitemap' },
  ];

  readonly contactInfo = [
    {
      id: 'map',
      icon: `${this.FOOTER_SVG_PATH}/map.svg`,
      href: 'https://maps.app.goo.gl/jWfsQAAXfc1Zs39F6',
      text: ['Hoveniersdreef 64', '3001 Heverlee'],
      ariaLabel: 'View our location on Google Maps',
      alt: 'Google Maps Icon',
    },
    {
      id: 'mail',
      icon: `${this.FOOTER_SVG_PATH}/mail.svg`,
      href: 'mailto:info@thorbouw.be',
      text: ['info@thorbouw.be'],
      ariaLabel: 'Send us an email',
      alt: 'Email Icon',
    },
    {
      id: 'phone',
      icon: `${this.FOOTER_SVG_PATH}/phone.svg`,
      href: 'tel:+32475530214',
      text: ['0032 475 530 214'],
      ariaLabel: 'Call us',
      alt: 'Phone Icon',
    },
  ];

  readonly socialLinks = [
    {
      id: 'whatsapp',
      icon: `${this.FOOTER_SVG_PATH}/whatsapp.svg`,
      href: 'https://api.whatsapp.com/send?phone=32475530214',
      text: ['WhatsApp'],
      ariaLabel: 'Contact us on WhatsApp',
      alt: 'Whatsapp Icon',
    },
    {
      id: 'instagram',
      icon: `${this.FOOTER_SVG_PATH}/instagram.svg`,
      href: 'https://www.instagram.com/thorbouw/',
      text: ['Instagram'],
      ariaLabel: 'Follow us on Instagram',
      alt: 'Instagram Icon',
    },
  ];
}
