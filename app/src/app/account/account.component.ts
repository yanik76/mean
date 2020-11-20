import { Component, OnInit } from '@angular/core';

import { AccountService} from '../services/account.service';
import { Account } from '../account';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private accountService : AccountService, private route: ActivatedRoute) { }

  accounts;
  searchText;

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.accountService.getAll().subscribe(
      data =>
      {
        this.accounts = data 
        console.log(data) 
      }
    )
  } 

}
