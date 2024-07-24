import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MenuComponent } from '../head/menu/menu.component';
import { MonasteryInfoComponent } from '../head/monastery-info/monastery-info.component';
import { HorarioComponent } from '../head/horario/horario.component';
import { SocialMediaComponent } from '../head/social-media/social-media.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    CommonModule,
    MenuComponent,
    MonasteryInfoComponent,
    HorarioComponent,
    SocialMediaComponent
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  @Input() isOpen = false;
}
