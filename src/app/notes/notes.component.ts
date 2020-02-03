import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpClientModule} from "@angular/common/http";
import {build$} from "protractor/built/element";
import {Observable} from "rxjs";
import {Note} from '../Note';
import {NotesService} from "../notes.service";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Note[] = [];
  text : string;

  constructor(private notesService :NotesService) {
  }

  add() {
    const note = {text: this.text};
    this.notes.push(note);
    this.text = "";
  }

  remove(idx) {
    this.notes.splice(idx,1);
  }

  getNotes() : void{
    this.notesService.getNotes().subscribe(notes =>{ this.notes = notes; console.dir(this.notes)}
    );
  }

  ngOnInit() {
    this.getNotes();
  }

}
