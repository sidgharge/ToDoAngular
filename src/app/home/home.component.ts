import { Component, OnInit, ViewChild } from '@angular/core';
import { Note } from '../note';
import { LoginService } from '../login.service';
import { CreateNoteComponent } from '../create-note/create-note.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notes: Note[];

  @ViewChild(CreateNoteComponent) createNote: CreateNoteComponent;

  constructor(private _loginService: LoginService) { }

  ngOnInit() {
    this.notes = this._loginService.notes;

    if (this.notes.length === 0) {
      this._loginService.getNotes().subscribe(data => {
        data.notes.forEach(note => {
          this._loginService.notes.push(note);
        });
         this.notes = this._loginService.notes;
         console.log(this.notes);
      });
    }
  }

  get pinnedFilter() {
    const filters = new Map<string, string>();
    filters.set('pin', 'true');
    return filters;
  }

  get othersFilter() {
    const filters = new Map<string, string>();
    filters.set('pin', 'false');
    return filters;
  }

  addNote() {
    this.createNote.saveNoteOnOutSideClick();
  }

}
