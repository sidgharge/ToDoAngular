import { Note } from './note';

export interface NoteResponse{
    message: string;
    status: number;
    notes: Note[];
}