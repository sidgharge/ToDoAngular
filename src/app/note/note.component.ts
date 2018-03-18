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
    this.notes = this._loginService.notes;

    if (this.notes === undefined) {
      this._loginService.getNotes().subscribe(data => {
        this.notes = data.notes;
        this._loginService.notes = this.notes;
        console.log(this.notes);
      });
    }
  }

}
