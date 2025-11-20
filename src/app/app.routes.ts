import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Advies } from './pages/advies/advies';
import { Fotos } from './pages/fotos/fotos';
import { Werkwijze } from './pages/werkwijze/werkwijze';
import { Project } from './pages/project/project';
import { Contact } from './pages/contact/contact';
import { Error } from './pages/error/error';


export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'overThorbouw', component: About },
  { path: 'fotos', component: Fotos },
  { path: 'advies', component: Advies},
  { path: 'werkwijze', component: Werkwijze },
  { path: 'projectontwikkeling', component: Project },
  { path: 'contact', component: Contact },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: '**', component: Error }
];
