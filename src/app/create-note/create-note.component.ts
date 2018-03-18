import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  newNote: any = {};

  constructor(private _service: LoginService) { }

  ngOnInit() {
  }

  createNote() {
    this.newNote.title = (document.getElementById('title')).innerHTML;
    this.newNote.description = (document.getElementById('description')).innerHTML;
    this._service.createNote(this.newNote).subscribe(data => {
      this._service.notes.push(data);
      (document.getElementById('title')).innerHTML = '';
      (document.getElementById('description')).innerHTML = '';
      }
    );
  }

}
