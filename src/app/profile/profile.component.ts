import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { User, USERS } from '../models/user.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CarouselModule,
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterLink,
    MatCardModule,
    MatDividerModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  
  @Input() id!: number;
  private dataService = inject(DataService);

  users: User[] = this.dataService.getUsers();

  get user() {
    if (this.id) {
      return this.users.find((user: User) => user.id === Number(this.id));
    }
    return null;
  }

  carouselOptions: OwlOptions = {
    loop: false,
    dots: true,
    navSpeed: 400,
    dotsEach: true,
    nav: false,
    navText: ['', ''],
    center: true,
    startPosition: 0,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      900: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
    autoHeight: false,
    autoplay: false,
    items: 1,
  };
}
