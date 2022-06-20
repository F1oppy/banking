import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-open-an-account',
  templateUrl: './open-an-account.component.html',
  styleUrls: ['./open-an-account.component.css']
})
export class OpenAnAccountComponent implements OnInit {
  accountType = "open-an-account";
  constructor() { }

  ngOnInit(): void {
  }

  openAnAccount = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    fatherName: new FormControl(""),
    mobileNumber: new FormControl(""),
    emailId: new FormControl(""),
    aadharNumber: new FormControl(""),
    dOB: new FormControl(""),
    occupationType: new FormControl(""),
    sourceOfIncome: new FormControl(""),
    grossAnnualIncome: new FormControl(""),
    addressLine1: new FormControl(""),
    addressLine2: new FormControl(""),
    city: new FormControl(""),
    postalCode: new FormControl(""),
    country: new FormControl(""),
    landmark: new FormControl(""),
    debitCard: new FormControl(""),
    netBanking: new FormControl(""),
    termsConditions: new FormControl(""),
  });

  openAnAccountSubmitted(){
    console.log(this.openAnAccount);
  }
}
