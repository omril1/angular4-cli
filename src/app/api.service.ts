import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/RX";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  constructor(private Http: Http) {
  }
}
