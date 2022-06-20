import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotuserid',
  templateUrl: './forgotuserid.component.html',
  styleUrls: ['./forgotuserid.component.css']
})
export class ForgotuseridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  forgotuseridForm = new FormGroup({
    accno: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),
    otpm1e: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(6), Validators.maxLength(6)])
  });
  forgotuseridSubmitted(){
    console.log(this.forgotuseridForm.value);
  }
  get accno(): FormControl{
    return this.forgotuseridForm.get("accno") as FormControl;
  }
  get otpm1e(): FormControl{
    return this.forgotuseridForm.get("otpm1e") as FormControl;
  }

}
