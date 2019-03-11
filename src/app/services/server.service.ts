import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';

import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ServerMessage } from '../shared/server-message';
import { Server } from '../shared/server';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private _http: HttpClient) { }

  getServer(): Observable<Server[]> {
    return this._http.get<Server[]>('https://localhost:5001/api/server');
  }

  handleServerMessage(msg: ServerMessage): Observable<Response> {
    const url = 'https//localhost:5001/api/server/' + msg.id;
    return this._http.put<Response>(url, msg);
  }
}
