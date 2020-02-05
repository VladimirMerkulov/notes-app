import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Section} from './Section';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {
  serviceUrl = 'api/sections';

  constructor(private http: HttpClient) {
  }

  getSections(): Observable<Section[]> {
    return this.http.get<Section[]>(this.serviceUrl);
  }

  writeSections(sections: Section[]): Observable<any> {
    return this.http.post(this.serviceUrl, sections);
  }
}
