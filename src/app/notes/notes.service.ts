import {Injectable} from '@angular/core';
import {Note} from '../Note';
import {Observable, Subscribable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Section} from '../sections/Section';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notesUrl: string = 'api/notes';

  getNotes(sectionTitle?: string): Observable<Note[]> {
    return this.http.get<Note[]>(this.notesUrl, sectionTitle ? {
      params: new HttpParams().set('section', sectionTitle)
    } : {});
  }

  addNote(note: Note): void {
    this.http.post(this.notesUrl, note).subscribe(response => console.log('note sent, response:', response));
  }

  constructor(private    http: HttpClient) {
  }
}
