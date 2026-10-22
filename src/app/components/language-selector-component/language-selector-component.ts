import { Component, inject, LOCALE_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-language-selector-component',
  templateUrl: './language-selector-component.html',
  styleUrl: './language-selector-component.css',
})
export class LanguageSelectorComponent {
  private router = inject(Router);
  readonly locale = inject(LOCALE_ID);

  readonly languages = [
    { code: 'nl-BE', path: 'nl', label: 'NL', name: 'Nederlands' },
    { code: 'fr-BE', path: 'fr', label: 'FR', name: 'Français' },
    { code: 'en-US', path: 'en', label: 'EN', name: 'English' },
  ];

  readonly currentPath = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map(() => this.router.url),
    ),
    { initialValue: this.router.url },
  );
}
