import {
  Component,
  ViewChild,
  ElementRef,
  Renderer2,
  AfterViewInit,
  HostListener,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar implements AfterViewInit {
  @ViewChild('hamburger') hamburgerButton!: ElementRef;
  @ViewChild('navLinksContainer') navLinksContainer!: ElementRef;
  @ViewChild('main') mainContent!: ElementRef;

  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateLayout(window.innerWidth);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.updateLayout(event.target.innerWidth);
    }
  }

  isMenuOpen = false;

  navLinks = [
    { label: 'Over Thorbouw', path: '/overThorbouw' },
    { label: "Foto's Realisaties", path: '/fotos' },
    { label: 'Bouwkundig advies', path: '/advies' },
    { label: 'Werkwijze', path: '/werkwijze' },
    { label: 'Projectontwikkeling & Wonen', path: '/projectontwikkeling' },
    { label: 'Contact', path: '/contact' },
  ];

  updateLayout(width: number) {
    const isMobile = width <= 1000;

    if (isMobile) {
      // MOBILE LAYOUT
      console.log('Mobile layout activated');
      this.renderer.setAttribute(this.navLinksContainer.nativeElement, 'inert', '');
      this.renderer.setStyle(this.navLinksContainer.nativeElement, 'transition', 'none');
    } else {
      // DESKTOP LAYOUT
      console.log('Desktop layout activated');
      this.closeMenu();
      this.renderer.removeAttribute(this.navLinksContainer.nativeElement, 'inert');
      this.closeMenu();
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.renderer.removeAttribute(this.navLinksContainer.nativeElement, 'inert');
      this.renderer.removeStyle(this.navLinksContainer.nativeElement, 'transition');
      this.renderer.setAttribute(this.mainContent.nativeElement, 'inert', '');
    } else {
      this.closeMenu();
    }
    this.renderer.setAttribute(
      this.hamburgerButton.nativeElement,
      'aria-expanded',
      this.isMenuOpen.toString()
    );
  }

  closeMenu() {
    this.isMenuOpen = false;

    this.renderer.setAttribute(this.navLinksContainer.nativeElement, 'inert', '');
    this.renderer.removeAttribute(this.mainContent.nativeElement, 'inert', '');

    setTimeout(() => {
      this.renderer.setStyle(this.navLinksContainer.nativeElement, 'transition', 'none');
    }, 300);

    this.renderer.setAttribute(
      this.hamburgerButton.nativeElement,
      'aria-expanded',
      this.isMenuOpen.toString()
    );
  }
}
