import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rps-selection',
  templateUrl: './rps-selection.component.html',
  styleUrls: ['./rps-selection.component.sass']
})
export class RpsSelectionComponent implements OnChanges {
  @Input() visible: string;
  @Input() player: string;
  @Output() $weaponChosen = new EventEmitter<Object>();
  chosenWeapon: string;

  constructor() { }

  selectWeapon(weapon) {
    this.chosenWeapon = weapon;
  }

  endTurn() {
    this.$weaponChosen.emit({
      weapon: this.chosenWeapon,
      player: this.player
    });
  }

  ngOnChanges() {
    console.log(this.visible);
  }

}
