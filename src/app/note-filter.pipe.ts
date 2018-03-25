import { Pipe, PipeTransform } from '@angular/core';
import { Note } from './note';

@Pipe({ name: 'noteFilter' })
export class NoteFilterPipe implements PipeTransform {

    transform(notes: Note[], filters: Map<string, string>) {
        const filteredNotes: Note[] = [];

        if (notes !== undefined) {
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
        return filteredNotes;
    }
}
