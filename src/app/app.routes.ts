import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: 'multiplayer',
        loadChildren: './multiplayer/multiplayer.module#MultiplayerModule'
    },
    {
        path: 'singleplayer',
        loadChildren: './singleplayer/singleplayer.module#SingleplayerModule'
    },
    // {
    //     path: '',
    //     redirectTo: 'singleplayer',
    //     pathMatch: 'full'
    // },
    //   { path: '**', component: PageNotFoundComponent }
];
