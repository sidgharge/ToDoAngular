import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL } from './todo-url';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ToDoResponse } from './todo-response';
import { NoteResponse } from './note-response';
import { Note } from './note';

@Injectable()
export class LoginService {

  notes: Note[] = [];

  constructor(private _http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'todoBearer ' + localStorage.getItem('token')
    })
  };

  httpOptionsToken = {
    headers: new HttpHeaders({
      'Authorization': 'todoBearer ' + localStorage.getItem('token')
    })
  };

  httpOptionsContentType = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  register(user): Observable<ToDoResponse> {
    return this._http.post<ToDoResponse>(URL + 'register', user, this.httpOptionsContentType);
  }

  login(user): Observable<ToDoResponse> {
    return this._http.post<ToDoResponse>(URL + 'login', user, this.httpOptionsContentType);
  }

  getNotes(): Observable<NoteResponse> {
    return this._http.get<NoteResponse>(URL + 'user/getallnotes', this.httpOptionsToken);
  }

  setNotes(notes: Note[]) {
    this.notes = notes;
  }

  createNote(note): Observable<Note> {
    return this._http.post<Note>(URL + 'user/createnote', note, this.httpOptions);
  }
}
