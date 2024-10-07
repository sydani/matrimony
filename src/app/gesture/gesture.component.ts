import { Component, inject } from '@angular/core';
import { User, USERS } from '../models/user.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {
  MatSnackBar,
} from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { RouterLink } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-gesture',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    RouterLink,
  ],
  templateUrl: './gesture.component.html',
  styleUrl: './gesture.component.scss',
})
export class GestureComponent {
  private _snackBar: MatSnackBar = inject(MatSnackBar);
  private dataService = inject(DataService);

  users: User[] = this.dataService.getUsers();

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
