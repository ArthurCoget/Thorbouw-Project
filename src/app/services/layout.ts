import { isPlatformBrowser } from '@angular/common';
import { Injectable, signal, inject, PLATFORM_ID, DestroyRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private navLinksTimeoutId: ReturnType<typeof setTimeout> | undefined;
  private hamburgerTimeoutId: ReturnType<typeof setTimeout> | undefined;

  private platformId = inject(PLATFORM_ID);
  private destroyRef = inject(DestroyRef);

  readonly HAMBURGER_ANIMATION_DURATION = 0.75;
  readonly LINK_ANIMATION_DURATION = 0.3;

  readonly isMenuOpen = signal(false);
  readonly transitionBlockedNavLinks = signal(true);
  readonly transitionBlockedHamburger = signal(true);

  readonly isMobile = signal(false);

  private clearAllTimeouts() {
    if (this.navLinksTimeoutId !== undefined) {
      clearTimeout(this.navLinksTimeoutId);
      this.navLinksTimeoutId = undefined;
    }
    if (this.hamburgerTimeoutId !== undefined) {
      clearTimeout(this.hamburgerTimeoutId);
      this.hamburgerTimeoutId = undefined;
    }
  }

  private setupNavLinksTimeout() {
    this.navLinksTimeoutId = setTimeout(() => {
      this.transitionBlockedNavLinks.set(true);
      this.navLinksTimeoutId = undefined;
    }, this.LINK_ANIMATION_DURATION * 1000);
  }

  private setupHamburgerTimeout() {
    this.hamburgerTimeoutId = setTimeout(() => {
      this.transitionBlockedHamburger.set(true);
      this.hamburgerTimeoutId = undefined;
    }, this.HAMBURGER_ANIMATION_DURATION * 1000);
  }

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const mediaQuery = window.matchMedia('(max-width: 1000px)');

      this.isMobile.set(mediaQuery.matches);

      const listener = (e: MediaQueryListEvent) => {
        this.isMobile.set(e.matches);
        if (!e.matches) this.closeMenu();
      };

      mediaQuery.addEventListener('change', listener);

      this.destroyRef.onDestroy(() => {
        this.clearAllTimeouts();
        mediaQuery.removeEventListener('change', listener);
      });

      this.isMobile.set(mediaQuery.matches);
    }
  }

  toggleMenu() {
    if (this.isMenuOpen()) {
      this.closeMenu();
    } else {
      this.clearAllTimeouts();
      this.isMenuOpen.set(true);
      this.transitionBlockedNavLinks.set(false);
      this.transitionBlockedHamburger.set(false);
    }
  }

  closeMenu() {
    this.clearAllTimeouts();
    this.isMenuOpen.set(false);
    this.setupHamburgerTimeout();
    this.setupNavLinksTimeout();
  }
}
