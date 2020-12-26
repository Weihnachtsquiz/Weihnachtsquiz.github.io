import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playersview',
  templateUrl: './playersview.component.html',
  styleUrls: ['./playersview.component.css']
})
export class PlayersviewComponent implements OnInit {

  matchpoints: number = 0;
  points: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  addOne(): void {
    this.points++;
    if(this.points >= 5) {
      this.matchpoints++;
      this.points = 0;
    }
  }

  reset(): void {
    this.points = 0;
  }

}
