import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-neft-transaction',
  templateUrl: './neft-transaction.component.html',
  styleUrls: ['./neft-transaction.component.css']
})
export class NEFTTransactionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  neftTransaction= new FormGroup({
    sender: new FormControl(""),
    receiver: new FormControl(""),
    amount: new FormControl(""),
    date: new FormControl("")
  });

  neftSubmitted(){
    console.log(this.neftTransaction.value);
  }
}
