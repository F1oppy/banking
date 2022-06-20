import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fp',
  templateUrl: './fp.component.html',
  styleUrls: ['./fp.component.css']
})
export class FpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  forgotpasswordForm = new FormGroup({
    userid: new FormControl("",[Validators.required, Validators.pattern("[a-zA-Z].*"), Validators.minLength(2)]),
    otpm1f: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(6), Validators.maxLength(6)])
  });
  forgotpasswordSubmitted(){
    console.log(this.forgotpasswordForm.value);
  }
  get userid(): FormControl{
    return this.forgotpasswordForm.get("userid") as FormControl;
  }
  get otpm1f(): FormControl{
    return this.forgotpasswordForm.get("otpm1f") as FormControl;
  }

}
