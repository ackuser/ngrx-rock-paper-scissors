import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { RouterModule, Routes } from '@angular/router';
import { routes } from './multiplayer.routes';
import { MultiplayerComponent } from './multiplayer.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MultiplayerComponent
  ]
})
export class MultiplayerModule { }
