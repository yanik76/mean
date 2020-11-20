import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:3000/accounts"

  constructor(private http: HttpClient) { }
  getAll(): Observable<Account[]>
  {
    return this.http.get<Account[]>(this.url);
  }

  get(id: string): Observable<Account>{
    return this.http.get<Account>(`${this.url}/${id}`)
  }
}
