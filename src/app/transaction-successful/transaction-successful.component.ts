import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transaction-successful',
  templateUrl: './transaction-successful.component.html',
  styleUrls: ['./transaction-successful.component.css']
})
export class TransactionSuccessfulComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  transactionSuccessful= new FormGroup({
    sender: new FormControl(""),
    receiver: new FormControl(""),
    amount: new FormControl(""),
    date: new FormControl(""),
    instructions: new FormControl(""),
    remarks: new FormControl(""),
  });

  transactionSubmitted(){
    console.log(this.transactionSuccessful.value);
  }

}
