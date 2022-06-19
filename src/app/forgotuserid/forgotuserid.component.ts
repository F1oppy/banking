import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgotuserid',
  templateUrl: './forgotuserid.component.html',
  styleUrls: ['./forgotuserid.component.css']
})
export class ForgotuseridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  registerForm = new FormGroup({
    accountno: new FormControl(""),
    otp1: new FormControl("")
  });
  registerSubmitted(){
    console.log(this.registerForm.value);
  }

}
