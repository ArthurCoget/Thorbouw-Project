import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar';
import { FooterComponent } from './components/footer/footer';
import { LayoutService } from './services/layout';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [NavBarComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('thorbouw-project');

  protected layoutService = inject(LayoutService);

  isAboutPage = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.isAboutPage = e.urlAfterRedirects.startsWith('/overThorbouw');
      });
  }
}
