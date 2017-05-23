import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent implements OnInit {
  timer: Observable<Number>

  constructor() {
    this.timer = Observable.interval(1000)
  }

  ngOnInit() {
  }
}
