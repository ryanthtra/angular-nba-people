import { Component, OnInit } from '@angular/core';
import { Player } from './player';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <h1>NBA Players</h1>
  <ul>
    <li *ngFor="let player of players" 
      (click)="selectPlayer(player)" 
      class="player-badge"
      [class.selected]="player === selectedPlayer">
      <span class="id-badge">{{player.position}} #{{player.jersey_number}} </span>
      <span class="name-badge">{{player.first_name}} {{player.last_name}}</span>
    </li>
  </ul>
  <hr>
  <app-player-detail [player]="selectedPlayer"></app-player-detail>
  `,
  // styleUrls: ['./app.component.css']
  styles: [`
    ul {
      list-style-type: none;
    }

    .player-badge {
      cursor: pointer;
      position: relative;
      border: 1px solid black;
      border-radius: 6px;
      width: 20em;
      height: 1.5em;
      margin: .5em;
      padding: .3em .1em;
      type: none;
    }

    .player-badge:hover {
      border: 2px solid black;
    }

    .player-badge .id-badge {
      display: inline-block;      
      padding: 0.6em 0.7em 0 0.7em;
      background-color: orange;
      line-height: 1em;
      position: relative;
      top: -5px;
      height: 100%;
      width: 16%;
      border-radius: 6px 0 0 6px;
      float: left;
    }

    .player-badge .name-badge {
      display: inline-block;      
      padding: 0.6em 0.7em 0 0.7em;
      background-color: yellow;
      line-height: 1em;
      position: relative;
      top: -5px;
      height: 100%;
      width: 70%;
      border-radius: 0 6px 6px 0;
      float: left;
    }

    .selected {
      background-color: black;
      color: #333333;
    }

    .selected:hover {
      background-color: #444444;
      color: #555555;
    }
  `]
})
export class AppComponent implements OnInit {
  player: Player = {
    id: 1,
    first_name: "First",
    last_name: "Last",
    jersey_number: 0,
    position: "PG",
    height: 79,
    weight: 230
  };
  players: Player[];  
  selectedPlayer: Player;

  constructor(private playerService: PlayerService)
  {

  }

  ngOnInit(): void 
  {
    this.getHeroes();
  }

  selectPlayer(player: Player): void
  {
    this.selectedPlayer = player;
  }

  getHeroes(): void
  {
    this.playerService.getPlayers()
    .then(players => this.players = players);
  }    
}
