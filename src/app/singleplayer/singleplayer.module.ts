import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { RouterModule, Routes } from '@angular/router';
import { routes } from './singleplayer.routes';
import { SingleplayerComponent } from './singleplayer.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SingleplayerComponent
  ]
})
export class SingleplayerModule { }
