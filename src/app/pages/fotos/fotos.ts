import { Component, inject } from '@angular/core';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { fotosHero } from '../../data/fotos.data';
import { FotoCard } from '../../components/foto-card/foto-card';
import { ProjectService } from '../../services/project';

@Component({
  selector: 'app-fotos',
  imports: [HeroComponent, FotoCard],
  templateUrl: './fotos.html',
  styleUrl: './fotos.css',
})
export class Fotos {
  readonly heroContent = fotosHero;

  projects = inject(ProjectService).getAll();
}
