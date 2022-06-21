import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Login= new FormGroup({
    userid: new FormControl("",[Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    newpassword: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(8), Validators.maxLength(10)]),
  });

  loginSubmitted(){
    // if(this.Login.value == this.beneficiaryAccNoRe.value){
      console.log(this.Login.valid);
    //   this.repeatAccount = 'none'
    // }else{
    //   this.repeatAccount='inline'
    // }
  }
  get userid(): FormControl{
    return this.Login.get("userid") as FormControl;
  }
  get newpassword(): FormControl{
    return this.Login.get("newpassword") as FormControl;
  }
}
