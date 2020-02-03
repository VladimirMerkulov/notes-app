import {Injectable} from '@angular/core';
import {Subscribable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Section} from './Section';

@Injectable({
  providedIn : 'root'
})
export class SectionsService {
  serviceURL : 'api/services'
  constructor(private http : HttpClient) {
  }
  getSections():Subscribable<Section[]>{
    return this.http.get<Section[]>(this.serviceURL)
  }
}
