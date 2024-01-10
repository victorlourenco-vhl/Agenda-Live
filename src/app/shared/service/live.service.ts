import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root',
})
export class LiveService {
  
  url = 'http://localhost:8080/lives/';

  constructor(private http: HttpClient) {}

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  public getLiveById(id: string): Observable<ResponsePageable> {
    return this.http.get<ResponsePageable>(this.url + id)
  }
}
