import { Pipe, PipeTransform } from '@angular/core';
import { Note } from './note';

@Pipe({ name: 'noteFilter' })
export class NoteFilterPipe implements PipeTransform {

    transform(notes: Note[], filters: Map<string, string>) {
        const filteredNotes: Note[] = [];

        if (notes !== undefined) {
            console.log(notes.length, filters);
            notes.forEach(note => {
                let added = true;
                if (filters.get('pin') === 'true' && !note.isPinned) {
                    added = false;
                }
                if (filters.get('pin') === 'false' && note.isPinned) {
                    added = false;
                }
                if (added) {
                    filteredNotes.push(note);
                }
            });

        }
        console.log('filtered', filteredNotes);
        return filteredNotes;
    }
}
