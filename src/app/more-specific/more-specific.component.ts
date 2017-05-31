import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'more-specific',
  templateUrl: './more-specific.component.html',
  styleUrls: ['./more-specific.component.styl']
})
export class MoreSpecificComponent implements OnInit {
  id : Observable<Number>

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.params.map(params => params['id']);
  }

}
