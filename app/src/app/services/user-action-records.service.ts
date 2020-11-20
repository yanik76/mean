import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Record } from '../record';

@Injectable({
  providedIn: 'root'
})
export class UserActionRecordsService {

  private url = "http://localhost:3000/records"

  constructor(private http: HttpClient) { }
  
  getAllRecords(): Observable<Record[]>
  {
    return this.http.get<Record[]>(this.url);
  }

  getRecord(id: string): Observable<Record>{
    return this.http.get<Record>(`${this.url}/${id}`)
  }
}
