import { Component, HostListener, Inject, PLATFORM_ID, AfterContentInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBarComponent implements AfterContentInit {
  isMenuOpen: boolean = false;
  isMobile: boolean = false;
  disableTransition: boolean = false;
  isReady: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterContentInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.updateLayout(window.innerWidth));
    }
  }

  @HostListener('transitionend', ['$event'])
  onTransitionEnd(event: TransitionEvent) {
    if (!this.isMenuOpen) {
      this.disableTransition = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.updateLayout(event.target.innerWidth);
    }
  }
  @HostListener('document:keydown.escape')
  onEscape() {
    this.closeMenu();
  }

  navLinks = [
    { label: 'Over Thorbouw', path: '/overThorbouw' },
    { label: "Foto's Realisaties", path: '/fotos' },
    { label: 'Bouwkundig advies', path: '/advies' },
    { label: 'Werkwijze', path: '/werkwijze' },
    { label: 'Projectontwikkeling & Wonen', path: '/projectontwikkeling' },
    { label: 'Contact', path: '/contact' },
  ];

  updateLayout(width: number) {
    this.isMobile = width <= 1000;

    if (!this.isMobile) {
      this.closeMenu(true);
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.disableTransition = false;

    if (!this.isMenuOpen) {
      this.closeMenu();
    } else{
      this.isReady = true
    }
  }

  closeMenu(force = false) {
    this.isMenuOpen = false;

    if (force) {
      this.disableTransition = true;
      this.isReady = false;
      return;
    }
    setTimeout(() => this.isReady = false, 750);
  }
}
