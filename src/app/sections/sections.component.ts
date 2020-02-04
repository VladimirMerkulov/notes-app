import {Component, OnInit} from '@angular/core';
import {Subscribable} from 'rxjs';
import {Section} from './Section';
import {SectionsService} from './sections.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {
  sections: Section[] = [];
  activeSection: string;

  constructor(private http: SectionsService) {

  }

  getSections(): void {
    this.http.getSections().subscribe((sections) => {
      this.sections = sections;
      if (!this.activeSection && this.sections.length > 0) {
        this.showSection(this.sections[0]);
      }
    });
  }

  showSection(section: Section) {
    this.activeSection = section.title;
  }

  ngOnInit() {
    this.getSections();
  }

}
