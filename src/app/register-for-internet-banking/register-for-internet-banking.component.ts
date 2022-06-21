import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-for-internet-banking',
  templateUrl: './register-for-internet-banking.component.html',
  styleUrls: ['./register-for-internet-banking.component.css']
})
export class RegisterForInternetBankingComponent implements OnInit {

  changePass: string = 'none';
  changePin: string = 'none';

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
}

  registerForInternetBanking= new FormGroup({
    accno: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),
    newpassword: new FormControl("",[Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
    confirmpassword: new FormControl("",[Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
    newtransactionpin: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(6), Validators.maxLength(6)]),
    confirmnewtransactionpin: new FormControl(""),
  });


  registerSubmitted(){
    if((this.newpassword.value == this.confirmpassword.value) && (this.newtransactionpin.value == this.confirmnewtransactionpin.value)){
      console.log(this.registerForInternetBanking.value);
      this.http.post<any>("//localhost:8080/register",{
        "userid": this.registerForInternetBanking.value.accno,
        "newpassword": this.registerForInternetBanking.value.newpassword,
        "newtransactionpin": this.registerForInternetBanking.value.newtransactionpin,
        "accno": this.registerForInternetBanking.value.accno
    })
      .subscribe(res=>{
        alert("Registered Successfully");
        this.registerForInternetBanking.reset();
        this.router.navigate(['login']);
      },err=>{alert("Error Occured");})
    }
    else{
      this.changePass='inline',
      this.changePin='inline'
    }
    //   this.repeatAccount = 'none'
    // }else{
    //   this.repeatAccount='inline'
    }



    get accno(): FormControl{
      return this.registerForInternetBanking.get("accno") as FormControl;
    }
    get newpassword(): FormControl{
      return this.registerForInternetBanking.get("newpassword") as FormControl;
    }
    get confirmpassword(): FormControl{
      return this.registerForInternetBanking.get("confirmpassword") as FormControl;
    }
    get newtransactionpin(): FormControl{
      return this.registerForInternetBanking.get("newtransactionpin") as FormControl;
    }
    get confirmnewtransactionpin(): FormControl{
      return this.registerForInternetBanking.get("confirmnewtransactionpin") as FormControl;
    }
  }
  


