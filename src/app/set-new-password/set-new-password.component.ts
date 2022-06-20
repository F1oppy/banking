import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-set-new-password',
  templateUrl: './set-new-password.component.html',
  styleUrls: ['./set-new-password.component.css']
})
export class SetNewPasswordComponent implements OnInit {

  repeatPass: string = 'none';
  constructor() { }

  ngOnInit(): void {
  }
    setnewpasswordForm = new FormGroup({
    newpassword: new FormControl("",[Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
    confirmnewpassword: new FormControl("")
  });
  setnewpasswordSubmitted(){
    if(this.newpassword.value == this.confirmnewpassword.value){
      console.log(this.setnewpasswordForm.value);
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
