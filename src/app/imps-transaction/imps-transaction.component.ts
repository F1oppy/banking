import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imps-transaction',
  templateUrl: './imps-transaction.component.html',
  styleUrls: ['./imps-transaction.component.css']
})
export class IMPSTransactionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // impsTransaction= new FormGroup({
  //   name: new FormControl(""),
  //   accno: new FormControl(""),
  //   raccno: new FormControl(""),
  //   saveBen: new FormControl(""),
  //   nickname: new FormControl(""),
  // });

  // impsSubmitted(){
  //   console.log(this.impsTransaction.value);
  // }
}
