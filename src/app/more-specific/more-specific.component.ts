import { Component, OnInit, NgZone } from '@angular/core';
import { DomSanitizer, SafeStyle, SafeUrl } from '@angular/platform-browser';
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
  cubeOffset = ''
  video: Blob
  videoUrl: SafeUrl

  constructor(private NgZone: NgZone, private sanitizer: DomSanitizer) { }

  async ngOnInit() {
    const response = await fetch('/assets/796814662.mp4');
    this.video = await response.blob();
    this.videoUrl = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(this.video));
  }

  moveStuff(event) {
    let { offsetX, offsetY } = event;
    let { clientWidth, clientHeight } = event.target;
    let turnY = (clientWidth / 2 - offsetX) / clientWidth * 50;
    let turnX = (clientHeight / 2 - offsetY) / clientHeight * 50;

    let inner = <HTMLElement>event.target.children[0];
    inner.style.transformOrigin = `calc(50% + ${this.transOriginX}px) 50% 0`;
    inner.style.transform = `rotateX(${turnX}rad) rotateY(${turnY}rad)`;
  }
}
