import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MenuComponent } from '../head/menu/menu.component';
import { MonasteryInfoComponent } from '../head/monastery-info/monastery-info.component';
import { HorarioComponent } from '../head/horario/horario.component';
import { SocialMediaComponent } from '../head/social-media/social-media.component';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from "../../pages/schedule/schedule.component";

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    CommonModule,
    MenuComponent,
    MonasteryInfoComponent,
    HorarioComponent,
    SocialMediaComponent,
    ScheduleComponent
],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  @Input() isOpen = false;
}
