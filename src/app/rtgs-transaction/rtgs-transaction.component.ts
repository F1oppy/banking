import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rtgs-transaction',
  templateUrl: './rtgs-transaction.component.html',
  styleUrls: ['./rtgs-transaction.component.css']
})
export class RTGSTransactionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  rtgsTransaction= new FormGroup({
    sender: new FormControl(""),
    receiver: new FormControl(""),
    amount: new FormControl(""),
    date: new FormControl(""),
    instructions: new FormControl(""),
    remarks: new FormControl(""),
  });

  rtgsSubmitted(){
    console.log(this.rtgsTransaction.value);
  }

}
