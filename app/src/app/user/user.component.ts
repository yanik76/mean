import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //users;
  jsonAccountData;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let accountId = this.route.snapshot.paramMap.get('id');
    console.log("Voici " + accountId)

    //My accountId is an account with user information
    this.userService.get(accountId).subscribe(
      data => {
        this.jsonAccountData = data;
        //this.users = Array.of(this.users)
        
        //console.log("user " + JSON.stringify(this.users))
        
      }
     
    )

    
  // this.getAll()
   
  }

  // getAll(){
  //   this.userService.get(id).subscribe(
  //     data =>
  //     {
  //       this.users = data 
  //       console.log(data)
  //     }
  //   )
  // }

}
