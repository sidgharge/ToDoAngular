import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  newNote: any = {};

  pinSrc = 'assets/pin.svg';

  pinned = false;

  constructor(private _service: LoginService) { }

  ngOnInit() {
  }

  createNote() {
    this.newNote.title = (document.getElementById('title')).innerHTML;
    this.newNote.description = (document.getElementById('description')).innerHTML;
    this.newNote.isPinned = this.pinned;
    this._service.createNote(this.newNote).subscribe(data => {
      console.log(data);
      this._service.notes.push(data);
      (document.getElementById('title')).innerHTML = '';
      (document.getElementById('description')).innerHTML = '';
      this.pinSrc = 'assets/pin.svg';
      this.pinned = false;
      }
    );
  }

  pin() {
    if (this.pinned) {
      this.pinSrc = 'assets/pin.svg';
      this.pinned = false;
    } else {
      this.pinSrc = 'assets/bluepin.svg';
      this.pinned = true;
    }
  }

}
