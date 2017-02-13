import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Result } from '../shared/models/result.model';
import { Player } from '../shared/models/player.model';
import { AppState } from '../shared/store/';
import { ADD_RESULT } from '../shared/store/results.action';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-singleplayer',
  templateUrl: './singleplayer.component.html',
  styleUrls: ['./singleplayer.component.sass']
})
export class SingleplayerComponent implements OnInit {
  results$;
  player1: Player;
  player2: Player;
  player1Visible: boolean = true;
  player2Visible: boolean = false;

  constructor(
    private _store: Store<AppState>
  ) {
  }

  ngOnInit() {
  }

  setPlayer1($event: Player) {
    this.player1 = new Player($event.name, $event.weapon);
    this.player1Visible = false;
    this.player2Visible = true;
  }

  setPlayer2($event: Player) {
    this.player2Visible = false;
    this.player2 = new Player($event.name, $event.weapon);
  }

  finishGame() {
    const newResult = new Result(this.player1.name, this.player1.weapon, this.player2.name, this.player2.weapon);
    this._store.dispatch({ type: ADD_RESULT, payload: newResult });
    this.player1Visible = true;
    this.player2Visible = true;
  }



}
