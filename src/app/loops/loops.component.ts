import { Component, OnInit, NgZone} from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'loops',
  templateUrl: './loops.component.html',
  styleUrls: ['./loops.component.styl']
})
export class LoopsComponent implements OnInit {
  transformation = 0
  transOriginX = 0
  cubeOffset = ''

  constructor(private route: ActivatedRoute, private NgZone: NgZone, private sanitizer: DomSanitizer) { }

  ngOnInit () {
  }

  moveStuff (event) {
    let { offsetX, offsetY } = event;
    let { clientWidth, clientHeight } = event.target;
    let turnY = (clientWidth / 2 - offsetX) / clientWidth * 50;
    let turnX = (clientHeight / 2 - offsetY) / clientHeight * 50;

    let inner = <HTMLElement>event.target.children[0];
    inner.style.transformOrigin = `calc(50% + ${this.transOriginX}px) 50% 0`;
    inner.style.transform = `rotateX(${turnX}rad) rotateY(${turnY}rad)`;
  }
}
