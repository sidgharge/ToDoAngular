import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { URL } from './todo-url';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ToDoResponse } from './todo-response';
import { NoteResponse } from './note-response';

@Injectable()
export class LoginService {

  headers: Headers;
  options: RequestOptions;
  constructor(private _http: Http) {
    const authorization = 'todoBearer ' + localStorage.getItem('token');
    this.headers = new Headers();
    this.headers.append('Authorization', authorization);

    this.options = new RequestOptions({headers: this.headers});
  }

  register(user): Observable<ToDoResponse> {
    return this._http.post(URL + 'register', user).map((res: Response) => <ToDoResponse>res.json());
  }

  login(user): Observable<ToDoResponse> {
    return this._http.post(URL + 'login', user).map((res: Response) => <ToDoResponse>res.json());
  }

  getNotes(): Observable<NoteResponse> {
    return this._http.get(URL + 'user/getallnotes', this.options).map((res: Response) => <NoteResponse>res.json());
  }
}