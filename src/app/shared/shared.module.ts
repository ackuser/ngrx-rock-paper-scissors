import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RpsSelectionComponent } from './components/rps-selection/rps-selection.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RpsSelectionComponent],
  exports: [RpsSelectionComponent],
})
export class SharedModule { }
