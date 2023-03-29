import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(
    private http: HttpClient
  ) { }

  getBookData():Observable<any>{
    let url = "assets/book.json"
    return this.http.get(url)
  }
}
