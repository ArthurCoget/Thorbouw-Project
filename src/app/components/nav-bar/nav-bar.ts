import { Component, HostListener, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LayoutService } from '../../services/layout';
import { LEFT_NAV_LINKS, RIGHT_NAV_LINKS } from '../../data/navigation.data';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
  host: {
    '[style.--hamburger-animation-duration]': 'layoutService.HAMBURGER_ANIMATION_DURATION + "s"',
    '[style.--nav-links-animation-duration]': 'layoutService.LINK_ANIMATION_DURATION + "s"',
  },
})
export class NavBarComponent {
  readonly leftNavLinks = LEFT_NAV_LINKS;
  readonly rightNavLinks = RIGHT_NAV_LINKS;

  protected layoutService = inject(LayoutService);

  @HostListener('document:keydown.escape')
  onEscape() {
    this.layoutService.closeMenu();
  }
}
