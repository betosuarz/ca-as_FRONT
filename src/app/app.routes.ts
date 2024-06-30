import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AbbeyComponent } from './pages/abbey/abbey.component';
import { RatesComponent } from './pages/rates/rates.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'abbey', component: AbbeyComponent, children: [
      { path: 'schedule', component: ScheduleComponent },
      { path: 'rates', component: RatesComponent },
    ],
  },
  { path: 'news', component: NewsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  // { path: '**', redirectTo: 'home' },
  { path: '**', component: NotFoundComponent },
];