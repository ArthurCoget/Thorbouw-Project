import { Component, signal } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('thorbouw-project');
}
