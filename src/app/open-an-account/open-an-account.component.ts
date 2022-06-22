import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-open-an-account',
  templateUrl: './open-an-account.component.html',
  styleUrls: ['./open-an-account.component.css']
})
export class OpenAnAccountComponent implements OnInit {

  accountType = "open-an-account";

  constructor(private http : HttpClient, private router:Router){ }

  ngOnInit(): void {
  }

  openAnAccount = new FormGroup({
    firstName: new FormControl("",[Validators.required,Validators.minLength(3)]),
    lastName: new FormControl("",[Validators.required,Validators.minLength(3)]),
    fatherName: new FormControl("",[Validators.required,Validators.minLength(3)]),
    mobileNumber: new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    emailId: new FormControl("",[Validators.required, Validators.email]),
    aadharNumber: new FormControl("",[Validators.required,Validators.minLength(12),Validators.maxLength(12), Validators.pattern("[0-9]*")]),
    dOB: new FormControl("",[Validators.required]),
    occupationType: new FormControl("",[Validators.required]),
    sourceOfIncome: new FormControl("",[Validators.required]),
    grossAnnualIncome: new FormControl("",[Validators.required, Validators.pattern("[0-9]*")]),
    addressLine1: new FormControl("",[Validators.required]),
    addressLine2: new FormControl(""),
    city: new FormControl("",[Validators.required]),
    postalCode: new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(6), Validators.pattern("[0-9]*")]),
    country: new FormControl("",[Validators.required]),
    landmark: new FormControl(""),
    debitCard: new FormControl(""),
    netBanking: new FormControl(""),
    termsConditions: new FormControl("",[Validators.required]),
  });

  openAnAccountSubmitted(){
    this.http.post<any>("http://localhost:8080/openAnAcct",{
      "firstName":this.openAnAccount.value.firstName,
      "lastName":this.openAnAccount.value.lastName,
      "fatherName":this.openAnAccount.value.fatherName,
      "mobileNumber":this.openAnAccount.value.mobileNumber,
      "userid":this.openAnAccount.value.mobileNumber,
      "emailId":this.openAnAccount.value.emailId,
      "aadharNumber":this.openAnAccount.value.aadharNumber,
      "dOB":this.openAnAccount.value.dOB,
      "occupationType":this.openAnAccount.value.occupationType,
      "sourceOfIncome":this.openAnAccount.value.sourceOfIncome,
      "grossAnnualIncome":this.openAnAccount.value.grossAnnualIncome,
      "addressLine1":this.openAnAccount.value.addressLine1,
      "addressLine2":this.openAnAccount.value.addressLine2,
      "city":this.openAnAccount.value.city,
      "postalCode":this.openAnAccount.value.postalCode,
      "country":this.openAnAccount.value.country,
      "landmark":this.openAnAccount.value.landmark,
      "debitCard":this.openAnAccount.value.debitCard,
      "netBanking":this.openAnAccount.value.netBanking,
      "termsConditions":this.openAnAccount.value.termsConditions,
    })
    .subscribe(res=>{
      alert("Account created Successfully");
      this.openAnAccount.reset();
      this.router.navigate(['register-for-internet-banking'])
    })
  }

  get firstName(): FormControl{
    return this.openAnAccount.get("firstName") as FormControl;
  }
  get lastName(): FormControl{
    return this.openAnAccount.get("lastName") as FormControl;
  }
  get fatherName(): FormControl{
    return this.openAnAccount.get("fatherName") as FormControl;
  }
  get mobileNumber(): FormControl{
    return this.openAnAccount.get("mobileNumber") as FormControl;
  }
  get emailId(): FormControl{
    return this.openAnAccount.get("emailId") as FormControl;
  }
  get aadharNumber(): FormControl{
    return this.openAnAccount.get("aadharNumber") as FormControl;
  }
  get dOB(): FormControl{
    return this.openAnAccount.get("dOB") as FormControl;
  }
  get occupationType(): FormControl{
    return this.openAnAccount.get("occupationType") as FormControl;
  }
  get sourceOfIncome(): FormControl{
    return this.openAnAccount.get("sourceOfIncome") as FormControl;
  }
  get grossAnnualIncome(): FormControl{
    return this.openAnAccount.get("grossAnnualIncome") as FormControl;
  }
  get addressLine1(): FormControl{
    return this.openAnAccount.get("addressLine1") as FormControl;
  }
  get addressLine2(): FormControl{
    return this.openAnAccount.get("addressLine2") as FormControl;
  }
  get city(): FormControl{
    return this.openAnAccount.get("city") as FormControl;
  }
  get postalCode(): FormControl{
    return this.openAnAccount.get("postalCode") as FormControl;
  }
  get country(): FormControl{
    return this.openAnAccount.get("country") as FormControl;
  }
  get landmark(): FormControl{
    return this.openAnAccount.get("landmark") as FormControl;
  }
  get debitCard(): FormControl{
    return this.openAnAccount.get("debitCard") as FormControl;
  }
  get netBanking(): FormControl{
    return this.openAnAccount.get("netBanking") as FormControl;
  }
  get termsConditions(): FormControl{
    return this.openAnAccount.get("termsConditions") as FormControl;
  }
}
