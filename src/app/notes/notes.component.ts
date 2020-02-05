import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import {build$} from 'protractor/built/element';
import {Observable} from 'rxjs';
import {Note} from '../Note';
import {NotesService} from './notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements  OnChanges {
  notes: Note[] = [];
  text: string;

  @Input()
  section: string;

  constructor(private notesService: NotesService) {
  }

  add(noteText: HTMLTextAreaElement) {
    const note = {
      text: noteText.value,
      section: this.section
    };
    noteText.value = '';
    this.addNote(note);
  }

  addNote(note : Note) {
      this.notesService.addNote(note);
      this.notes.push(note);
  }

  remove(idx) {
    this.notes.splice(idx, 1);
  }

  getNotes(): void {
    console.log('Notes Active section: ', this.section)
    this.notesService.getNotes(this.section).subscribe(notes => {
        this.notes = notes;
      }
    )
    ;
  }

  ngOnChanges() {
    this.getNotes();
  }


}
