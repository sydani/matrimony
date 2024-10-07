import { Component, inject } from '@angular/core';
import { User } from '../models/user.model';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
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
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  
  private router = inject(Router);
  private _snackBar: MatSnackBar = inject(MatSnackBar);
  private dataService = inject(DataService);

  users: User[] = this.dataService.getUsers();

  carouselOptions: OwlOptions = {
    loop: true,
    dots: false,
    navSpeed: 400,
    nav: false,
    navText: ['', ''],
    center: false,
    startPosition: 0,
    autoHeight: false,
    autoplay: false,
    margin: 20,
    mouseDrag: true,
    responsive: {
      0: {
        items: 1.5,
      },
      600: {
        items: 2.5,
      },
      900: {
        items: 3.5,
      },
      1000: {
        items: 4.5,
      },
    },
  };

  goToProfile(userId: number) {
    this.router.navigate(['/profile', userId]);
  }

  handleLike(userId: number) {
    this.users = this.users.filter((user: User) => user.id !== userId);
    this.openSnackBar('User liked!', 'success');
  }

  handleDislike(userId: number) {
    this.users = this.users.filter((user: User) => user.id !== userId);
    this.openSnackBar('User disliked!', 'danger');
  }

  openSnackBar(message: string, type: string) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: type === 'danger' ? 'snackbar-danger' : 'snackbar-success',
      duration: 3000,
      data: {
        message: message,
      },
    });
  }

}
