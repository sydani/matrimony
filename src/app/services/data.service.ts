import { inject, Injectable } from '@angular/core';
import { USERS } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
    localStorage.setItem('users', JSON.stringify(USERS));
   }
   

  getUsers() {
    return JSON.parse(localStorage.getItem('users') ?? '[]');
  }
}
