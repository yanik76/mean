import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Account } from '../account';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) { }

  private url = "http://localhost:3000/accounts";
 
  //Method to display all the accounts we have in database
  getAll(): Observable<Account[]>
  {
    return this.http.get<Account[]>(this.url);
  }

  get(id: number): Observable<Account>{
    return this.http.get<Account>(`${this.url}/${id}`)
  }
  
  
}
