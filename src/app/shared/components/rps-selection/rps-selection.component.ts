import {
  Component, Input, Output, EventEmitter, OnChanges,
  trigger, state, style, transition, animate
} from '@angular/core';

@Component({
  selector: 'app-rps-selection',
  templateUrl: './rps-selection.component.html',
  styleUrls: ['./rps-selection.component.sass'],
  animations: [
    trigger('visibility', [
      state('void', style({ opacity: 0, transform: 'scale(0.5)' })),
      state('visible', style({ opacity: 1 })),
      state('invisible', style({ opacity: 0, bottom: '-20px' })),
      transition('* => *', animate('300ms')),
    ])
  ]
})
export class RpsSelectionComponent implements OnChanges {
  @Input() visible: string;
  @Input() name: string;
  @Output() $weaponChosen = new EventEmitter<Object>();
  chosenWeapon: string;
  visibility: string;

  constructor() { }

  selectWeapon(weapon) {
    this.chosenWeapon = weapon;
  }

  endTurn() {
    this.$weaponChosen.emit({
      weapon: this.chosenWeapon,
      name: this.name
    });
  }

  ngOnChanges() {
    if (this.visible) {
      this.visibility = 'visible';
    } else {
      this.visibility = 'invisible';
    }
  }

}
