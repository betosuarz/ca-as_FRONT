import { Component} from '@angular/core';
import { RouterLink, NavigationEnd, Event } from '@angular/router';
import { CarouselComponent } from '../head/carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { HorarioComponent } from '../head/horario/horario.component';
import { MenuComponent } from '../head/menu/menu.component';
import { MonasteryInfoComponent } from '../head/monastery-info/monastery-info.component';
import { PoliticsComponent } from '../head/politics/politics.component';
import { SocialMediaComponent } from '../head/social-media/social-media.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,
           CommonModule,
           CarouselComponent,
           HorarioComponent,
           MenuComponent,
           MonasteryInfoComponent,
           PoliticsComponent,
           SocialMediaComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{

}
