import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Note } from '../note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  notes: Note[];

  constructor(private _loginService: LoginService) { }

  ngOnInit() {
    this._loginService.getNotes().subscribe(
      res => {
        this.notes = res.notes;
      }
    );
  }

}
