import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserActionRecordsService } from '../services/user-action-records.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-action-records',
  templateUrl: './user-action-records.component.html',
  styleUrls: ['./user-action-records.component.css']
})
export class UserActionRecordsComponent implements OnInit {



  constructor(private userActionRecordsService: UserActionRecordsService, private route: ActivatedRoute, private location: Location) { }
  records
  searchDate
  ngOnInit(): void {
    this.getAllRecordsFromOneUser()

  }
  goBack() {
    this.location.back();
  }
  getAllRecordsFromOneUser() {
    let userId = this.route.snapshot.paramMap.get('id');


    this.userActionRecordsService.getRecord(userId).subscribe(
      data => {
        this.records = data;
      }
    )
  }

 
  
  // https://therichpost.com/angular-10-datatable-with-datepicker-filter/

}
