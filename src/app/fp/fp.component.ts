import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fp',
  templateUrl: './fp.component.html',
  styleUrls: ['./fp.component.css']
})
export class FpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  registerForm = new FormGroup({
    userid: new FormControl(""),
    otp: new FormControl("")
  });
  registerSubmitted(){
    console.log(this.registerForm.value);
  }

}
