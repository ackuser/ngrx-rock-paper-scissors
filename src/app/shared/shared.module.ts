import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RpsSelectionComponent } from './components/rps-selection/rps-selection.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [RpsSelectionComponent],
  exports: [RpsSelectionComponent, FormsModule],
})
export class SharedModule { }
