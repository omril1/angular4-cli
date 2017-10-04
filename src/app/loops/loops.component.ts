import { Component, OnInit, NgZone } from "@angular/core";
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

@Component({
  selector: "loops",
  templateUrl: "./loops.component.html",
  styleUrls: ["./loops.component.styl"]
})
export class LoopsComponent implements OnInit {
  transOriginX = 0;
  isMouseDown = false;
  lastMousePosition = { x: null, y: null };

  constructor(
    private route: ActivatedRoute,
    private NgZone: NgZone,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {}

  mouseMove(event) {
    if (this.isMouseDown) {
	  // TODO: user advanced destructoring:
	  // mouseMove({offsetX:x, offsetY: y}) - gives only the x and y - ignores other values.
      let { offsetX, offsetY } = event;
      let dx = this.lastMousePosition.x - offsetX;
      let dy = this.lastMousePosition.y - offsetY;
      let distance = Math.hypot(dx, dy);

      let { clientWidth, clientHeight } = event.target;
      let turnY = (clientWidth / 2 - offsetX) / clientWidth * 50;
      let turnX = (clientHeight / 2 - offsetY) / clientHeight * 50;

      let inner = <HTMLElement>event.target.children[0];
      inner.style.transformOrigin = `calc(50% + ${this.transOriginX}px) 50% 0`;
      inner.style.transform = `rotateX(${turnX}rad) rotateY(${turnY}rad)`;
    }
  }

  mouseDown(event) {
    this.isMouseDown = true;
  }

  mouseUp(event) {
    if (this.isMouseDown) {
      this.isMouseDown = false;
      this.lastMousePosition.x = this.lastMousePosition.y = null;
    }
  }
}
