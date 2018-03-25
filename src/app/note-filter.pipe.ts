import { Pipe, PipeTransform } from '@angular/core';
import { Note } from './note';

@Pipe({name: 'noteFilter'})
export class NoteFilterPipe implements PipeTransform {

    transform(notes: Note[], filters: any[]) {
        const filteredNotes: Note[] = [];

       if (notes !== undefined) {
        notes.forEach(note => {
            if (note.isPinned) {
                filteredNotes.push(note);
            }
        });

       }
        return filteredNotes;
    }
}
