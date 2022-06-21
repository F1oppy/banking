import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-new-password',
  templateUrl: './set-new-password.component.html',
  styleUrls: ['./set-new-password.component.css']
})
export class SetNewPasswordComponent implements OnInit {

  repeatPass: string = 'none';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
    setnewpasswordForm = new FormGroup({
    newpassword: new FormControl("",[Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
    confirmnewpassword: new FormControl("")
  });
  setnewpasswordSubmitted(){
    if(this.newpassword.value == this.confirmnewpassword.value){
      console.log(this.setnewpasswordForm.value);
      this.router.navigate(['login']);
    }
    else{
      this.repeatPass='inline'
    }
  }
  get newpassword(): FormControl{
    return this.setnewpasswordForm.get("newpassword") as FormControl;
  }
  get confirmnewpassword(): FormControl{
    return this.setnewpasswordForm.get("confirmnewpassword") as FormControl;
  }


}
