import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class changePasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  changePasswordComponent= new FormGroup({
    PasswordComponent: new FormControl(""),
    confirmloginpassword: new FormControl(""),
    Transactionpassword: new FormControl(""),
    ConfirmTransactionpassword: new FormControl(""),
  });
  changePasswordSubmitted(){
    console.log(this.changePasswordComponent.value);

  }
}
