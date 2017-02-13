import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RpsSelectionComponent } from './components/rps-selection/rps-selection.component';
import { ResultListComponent } from './components/result-list/result-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [RpsSelectionComponent, ResultListComponent],
  exports: [RpsSelectionComponent, ResultListComponent, FormsModule],
})
export class SharedModule { }
