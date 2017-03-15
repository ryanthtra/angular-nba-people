import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player';

const POSITIONS: Object[] = [ 
  { short: "PG", long: "Point Guard" }, 
  { short: "SG", long: "Shooting Guard" }, 
  { short: "SF", long: "Small Forward" }, 
  { short: "PF", long: "Power Forward" }, 
  { short: "C", long: "Center" }, 
];

@Component({
  selector: 'app-player-detail',
  //templateUrl: './player-detail.component.html',
  template: `
  <div *ngIf="player">
    <h2>{{player.first_name}} {{player.last_name}} details:</h2>
    <div><label>Id: </label>{{player.id}}</div>
    <div><label>Number: </label>{{player.jersey_number}}</div>
    <div><label>Position: </label>{{player.position}}</div>
    <div><label>Height: </label>{{calcHeightFeet(player.height)}}'{{calcHeightInches(player.height)}}"</div>
    <div><label>Weight (lb): </label>{{player.weight}}</div>
    <hr>
    <h2>Edit Details:</h2>
    <div><label>First Name: </label><input [(ngModel)]="player.first_name" placeholder="first name"></div>
    <div><label>Last Name: </label><input [(ngModel)]="player.last_name" placeholder="last name"></div>
    <div><label>Number: </label><input [(ngModel)]="player.jersey_number" placeholder="number"></div>
    <div>
      <label>Position: </label>
      <select [(ngModel)]="player.position" placeholder="position">
        <option *ngFor="let position of positions" [ngValue]="position.short">{{position.long}}</option>
      </select>
    </div>
    <div><label>Height: </label><input [(ngModel)]="player.height" placeholder="height"></div>
    <div><label>Weight: </label><input [(ngModel)]="player.weight" placeholder="weight"></div>
  </div>
  `,
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  @Input() player: Player;
  positions = POSITIONS;
  
  constructor() { }

  ngOnInit() {
  }

  calcHeightFeet(height: number): number
  {
    return Math.floor(height / 12);
  }

  calcHeightInches(height: number): number
  {
    return height % 12;
  }
}
