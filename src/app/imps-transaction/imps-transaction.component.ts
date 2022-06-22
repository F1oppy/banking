import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imps-transaction',
  templateUrl: './imps-transaction.component.html',
  styleUrls: ['./imps-transaction.component.css']
})
export class IMPSTransactionComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  impsTransaction= new FormGroup({
    sender: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10)]),
    receiver: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10)]),
    amount: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10)]),
    transactionDate: new FormControl("",[Validators.required]),
    instructions: new FormControl(""),
    remarks: new FormControl(""),
  });

  impsSubmitted(){
    console.log(this.impsTransaction.value);
    this.http.post<any>("http://localhost:8080/NEFTTransaction",{
      "sender":this.impsTransaction.value.sender,
      "receiver":this.impsTransaction.value.receiver,
      "amount":this.impsTransaction.value.amount,
      "transactionDate":this.impsTransaction.value.transactionDate,
      "instructions":this.impsTransaction.value.instructions,
      "remarks":this.impsTransaction.value.remarks,
    })
    .subscribe(res=>{
      alert("Transaction Successful");
      this.impsTransaction.reset();
      this.router.navigate(['transaction-successful'])
    })
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
  get transactionDate(): FormControl{
    return this.impsTransaction.get("transactionDate") as FormControl;
  }
  get instructions(): FormControl{
    return this.impsTransaction.get("instructions") as FormControl;
  }
  get remarks(): FormControl{
    return this.impsTransaction.get("remarks") as FormControl;
  }
}
