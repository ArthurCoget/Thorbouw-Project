import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  isMenuOpen = false;

  navLinks = [
    { label: 'Over Thorbouw', path: '/overThorbouw' },
    { label: 'Foto\'s Realisaties', path: '/fotos' },
    { label: 'Bouwkundig advies', path: '/advies' },
    { label: 'Werkwijze', path: '/werkwijze' },
    { label: 'Projectontwikkeling & Wonen', path: '/projectontwikkeling' },
    { label: 'Contact', path: '/contact' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
