import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';
@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  users:any;
  constructor(private userData:UsersDataService) 
  {
    userData.users().subscribe((data)=>{
      console.warn("data",data);
      this.users=data
    });
   }

  ngOnInit(): void {
  }

}
