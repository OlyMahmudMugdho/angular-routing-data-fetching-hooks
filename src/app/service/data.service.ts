import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url :string = 'https://jsonplaceholder.typicode.com/todos/'
  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(this.url)
  }
}
