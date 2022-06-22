import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-neft-transaction',
  templateUrl: './neft-transaction.component.html',
  styleUrls: ['./neft-transaction.component.css']
})
export class NEFTTransactionComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  neftTransaction= new FormGroup({
    sender: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10)]),
    receiver: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10)]),
    amount: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10)]),
    transactionDate: new FormControl("",[Validators.required]),
  });

  neftSubmitted(){
    console.log(this.neftTransaction.value);
    this.http.post<any>("http://localhost:8080/NEFTTransaction",{
      "sender":this.neftTransaction.value.sender,
      "receiver":this.neftTransaction.value.receiver,
      "amount":this.neftTransaction.value.amount,
      "transactionDate":this.neftTransaction.value.transactionDate,
    })
    .subscribe(res=>{
      alert("Transaction Successful");
      this.neftTransaction.reset();
      this.router.navigate(['transaction-successful'])
    })
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
