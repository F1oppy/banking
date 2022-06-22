import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { TransactionServiceService } from '../transaction-service.service';
@Component({
  selector: 'app-transaction-successful',
  templateUrl: './transaction-successful.component.html',
  styleUrls: ['./transaction-successful.component.css']
})
export class TransactionSuccessfulComponent implements OnInit {

  users : any;
  constructor(private userData:TransactionServiceService) { 
    userData.users().subscribe((data)=>{
      console.warn("data",data);
      this.users=data
    });
  }

  ngOnInit(): void {
  }
}
