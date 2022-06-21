import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePass: string = 'none';
  changePin: string = 'none';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  changepasswordForm= new FormGroup({
    newpassword: new FormControl("",[Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
    confirmnewpassword: new FormControl(""),
    newtransactionpin: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(6), Validators.maxLength(6)]),
    confirmnewtransactionpin: new FormControl(""),
  });
  changepasswordSubmitted(){
    if((this.newpassword.value == this.confirmnewpassword.value) && (this.newtransactionpin.value == this.confirmnewtransactionpin.value)){
      console.log(this.changepasswordForm.value);
      this.router.navigate(['login']);
    }
    else{
      this.changePass='inline',
      this.changePin='inline'
    }

  }
  get newpassword(): FormControl{
    return this.changepasswordForm.get("newpassword") as FormControl;
  }
  get confirmnewpassword(): FormControl{
    return this.changepasswordForm.get("confirmnewpassword") as FormControl;
  }
  get newtransactionpin(): FormControl{
    return this.changepasswordForm.get("newtransactionpin") as FormControl;
  }
  get confirmnewtransactionpin(): FormControl{
    return this.changepasswordForm.get("confirmnewtransactionpin") as FormControl;
  }
}
