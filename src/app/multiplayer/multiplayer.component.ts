
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Result } from '../shared/models/result.model';
import { Player } from '../shared/models/player.model';
import { AppState } from '../shared/store/';
import { ADD_RESULT } from '../shared/store/results.action';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-multiplayer',
  templateUrl: './multiplayer.component.html',
  styleUrls: ['./multiplayer.component.sass']
})
export class MultiplayerComponent implements OnInit {
  results$;
  player1: Player;
  player2: Player;
  player1Visible: boolean = true;
  player2Visible: boolean = true;
  weaponsArray: string[] = [
    'rock',
    'paper',
    'scissors'
  ];

  constructor(
    private _store: Store<AppState>
  ) {
  }

  ngOnInit() {
  }

  setPlayer1($event: Player) {
    this.player1 = new Player($event.name, $event.weapon);
    this.player2 = new Player('computer', this.weaponsArray[this.getRandomInt(1, 3)]);
    this.player1Visible = false;
  }

  finishGame() {
    const newResult = new Result(this.player1.name, this.player1.weapon, this.player2.name, this.player2.weapon);
    this._store.dispatch({ type: ADD_RESULT, payload: newResult });
    this.player1Visible = true;
    this.player2Visible = true;
  }

  getRandomInt(min, max) {
    //Will return a number inside the given range, inclusive of both minimum and maximum
    //i.e. if min=0, max=20, returns a number from 0-20
    return (Math.floor(Math.random() * (max - min + 1)) + min) - 1;
  }

}
