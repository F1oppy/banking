import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rtgs-transaction',
  templateUrl: './rtgs-transaction.component.html',
  styleUrls: ['./rtgs-transaction.component.css']
})
export class RTGSTransactionComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

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
    this.http.post<any>("http://localhost:8080/NEFTTransaction",{
      "sender":this.rtgsTransaction.value.sender,
      "receiver":this.rtgsTransaction.value.receiver,
      "amount":this.rtgsTransaction.value.amount,
      "transactionDate":this.rtgsTransaction.value.transactionDate,
      "instructions":this.rtgsTransaction.value.instructions,
      "remarks":this.rtgsTransaction.value.remarks,
    })
    .subscribe(res=>{
      alert("Transaction Successful");
      this.rtgsTransaction.reset();
      this.router.navigate(['transaction-successful'])
    })
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