import {Injectable} from '@angular/core';
import {Note} from './Note';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notesUrl: string = 'localhost:8080/server.js'

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.notesUrl);
  }

  constructor(private http: HttpClient) {
  }
}
