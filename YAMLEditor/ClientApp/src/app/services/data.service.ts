import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as YAML from 'yaml';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {

   }

  fetchData(): Observable<any> {
    const filename = 'access2.yaml';
    return this.http.get(`/assets/testData/${filename}`, {responseType: 'text'}).pipe(map( text => {
      return YAML.parse(text);
    }));
  }
}
