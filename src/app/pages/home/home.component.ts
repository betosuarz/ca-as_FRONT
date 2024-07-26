import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Carousel } from 'flowbite';
import { ScheduleComponent } from '../schedule/schedule.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, ScheduleComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


}

