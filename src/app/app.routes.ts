import { Routes } from '@angular/router';

import { MultiplayerComponent } from './multiplayer/multiplayer.component';
import { SingleplayerComponent } from './singleplayer/singleplayer.component';

export const appRoutes: Routes = [
    { path: 'multiplayer', component: MultiplayerComponent },
    { path: 'singleplayer', component: SingleplayerComponent },
    // {
    //     path: '',
    //     redirectTo: 'singleplayer',
    //     pathMatch: 'full'
    // },
    //   { path: '**', component: PageNotFoundComponent }
];
