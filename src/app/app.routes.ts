import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: '',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'multiplayer',
        loadChildren: './multiplayer/multiplayer.module#MultiplayerModule'
    },
    {
        path: 'singleplayer',
        loadChildren: './singleplayer/singleplayer.module#SingleplayerModule'
    },
];
