import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/retryWhen';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.styl']
})
export class MainViewComponent implements OnInit {

  constructor(private ApiService: ApiService) {
  }

  ngOnInit () {
  }
}
