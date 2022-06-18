import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    sender: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10)]),
    receiver: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10)]),
    amount: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10)]),
    date: new FormControl(""),
    instructions: new FormControl(""),
    remarks: new FormControl(""),
  });

  impsSubmitted(){
    console.log(this.impsTransaction.value);
  }

  get sender(): FormControl{
    return this.impsTransaction.get("sender") as FormControl;
  }
  get receiver(): FormControl{
    return this.impsTransaction.get("receiver") as FormControl;
  }
  get amount(): FormControl{
    return this.impsTransaction.get("amount") as FormControl;
  }
  get date(): FormControl{
    return this.impsTransaction.get("date") as FormControl;
  }
  get instructions(): FormControl{
    return this.impsTransaction.get("instructions") as FormControl;
  }
  get remarks(): FormControl{
    return this.impsTransaction.get("remarks") as FormControl;
  }
}
