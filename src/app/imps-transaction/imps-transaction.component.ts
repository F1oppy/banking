import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-imps-transaction',
  templateUrl: './imps-transaction.component.html',
  styleUrls: ['./imps-transaction.component.css']
})
export class IMPSTransactionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  impsTransaction= new FormGroup({
    sender: new FormControl(""),
    receiver: new FormControl(""),
    amount: new FormControl(""),
    date: new FormControl(""),
    instructions: new FormControl(""),
    remarks: new FormControl(""),
  });

  impsSubmitted(){
    console.log(this.impsTransaction.value);
  }
}
