import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { URL } from './todo-url';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ToDoResponse } from './todo-response';

@Injectable()
export class LoginService {

  constructor(private _http: Http) { }

  register(user): Observable<ToDoResponse> {
    return this._http.post(URL + 'register', user).map((res: Response) => <ToDoResponse>res.json());
  }

  login(user): Observable<ToDoResponse> {
    return this._http.post(URL + 'login', user).map((res: Response) => <ToDoResponse>res.json());
  }
}