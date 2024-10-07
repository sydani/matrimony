import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'profile/:id',
        loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent)
    },
    {
        path: 'gesture',
        loadComponent: () => import('./gesture/gesture.component').then(m => m.GestureComponent)
    }
];
