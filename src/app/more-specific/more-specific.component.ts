import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'more-specific',
  templateUrl: './more-specific.component.html',
  styleUrls: ['./more-specific.component.styl']
})
export class MoreSpecificComponent implements OnInit {
  id: Observable<Number>
  transformation = 0
  transOriginX = 0

  constructor(private route: ActivatedRoute, private NgZone: NgZone) { }

  ngOnInit () {
    this.id = this.route.params.map(params => params['id']);
  }

  moveStuff (event) {
    let { offsetX, offsetY } = event;
    let { clientWidth, clientHeight } = event.target;
    let turnY = (clientWidth / 2 - offsetX) / clientWidth * 100;
    let turnX = (clientHeight / 2 - offsetY) / clientHeight * 100;
    this.NgZone.runOutsideAngular(() => {
      let inner = <HTMLElement>event.target.children[0];
      inner.style.transformOrigin = `calc(50% + ${this.transOriginX}px) 50% 0`;
      if (inner) {
        switch (this.transformation) {
          case 0:
            inner.style.transform = `rotateZ(${- Math.atan2(turnY, turnX)}rad)`; // always towards the cursor
            break;
          case 1:
            inner.style.transform = `rotateX(${turnX}deg) rotateY(${turnY}deg)`; // rotates around central axis
            break;
          case 2:
            inner.style.transform = `skewX(${turnX}deg) skewY(${turnY}deg)`; // skews away
            break;
        }
      }
    });
  }

  keydownUp (event) {
    switch (event.key) {
      case "ArrowUp":
        this.transformation++;
        if (this.transformation == 3) {
          this.transformation = 0;
        }
        break;
      case "ArrowDown":
        this.transformation--;
        if (this.transformation == -1) {
          this.transformation = 2;
        }
        break;
      case "ArrowLeft":
        this.transOriginX += 5;
        break;
      case "ArrowRight":
        this.transOriginX -= 5;
        break;
      default:
        break;
    }
  }
}
