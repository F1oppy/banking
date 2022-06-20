import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    sender: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10)]),
    receiver: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10)]),
    amount: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10)]),
    transactionDate: new FormControl("",[Validators.required]),
    instructions: new FormControl(""),
    remarks: new FormControl(""),
  });

  neftSubmitted(){
    console.log(this.neftTransaction.value);
  }

  get sender(): FormControl{
    return this.neftTransaction.get("sender") as FormControl;
  }
  get receiver(): FormControl{
    return this.neftTransaction.get("receiver") as FormControl;
  }
  get amount(): FormControl{
    return this.neftTransaction.get("amount") as FormControl;
  }
  get transactionDate(): FormControl{
    return this.neftTransaction.get("transactionDate") as FormControl;
  }
}
