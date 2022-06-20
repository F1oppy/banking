import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    sender: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10)]),
    receiver: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10)]),
    amount: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10)]),
    transactionDate: new FormControl("",[Validators.required]),
    instructions: new FormControl(""),
    remarks: new FormControl(""),
  });

  rtgsSubmitted(){
    console.log(this.rtgsTransaction.value);
  }

  get sender(): FormControl{
    return this.rtgsTransaction.get("sender") as FormControl;
  }
  get receiver(): FormControl{
    return this.rtgsTransaction.get("receiver") as FormControl;
  }
  get amount(): FormControl{
    return this.rtgsTransaction.get("amount") as FormControl;
  }
  get transactionDate(): FormControl{
    return this.rtgsTransaction.get("transactionDate") as FormControl;
  }
  get instructions(): FormControl{
    return this.rtgsTransaction.get("instructions") as FormControl;
  }
  get remarks(): FormControl{
    return this.rtgsTransaction.get("remarks") as FormControl;
  }
}