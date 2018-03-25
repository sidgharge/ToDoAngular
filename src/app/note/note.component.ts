import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../login.service';
import { Note } from '../note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  notes: Note[];

  @Input() filter: Map<string, string>;

  constructor(private _loginService: LoginService) { }

  ngOnInit() {
    this.notes = this._loginService.notes;
  }

}
