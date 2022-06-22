import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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
