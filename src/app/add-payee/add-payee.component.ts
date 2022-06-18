import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-payee',
  templateUrl: './add-payee.component.html',
  styleUrls: ['./add-payee.component.css']
})
export class AddPayeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addPayee= new FormGroup({
    name: new FormControl("",[Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    accno: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10)]),
    raccno: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10)]),
    saveBen: new FormControl(""),
    nickname: new FormControl(""),
  });

  beneficiarySubmitted(){
    console.log(this.addPayee.get("name"));
    console.log(this.addPayee.get("accno"));
    console.log(this.addPayee.get("raccno"));
    console.log(this.addPayee.get("saveBen"));
    console.log(this.addPayee.get("nickname"));
  }

  get name(): FormControl{
    return this.addPayee.get("name") as FormControl;
  }
  get accno(): FormControl{
    return this.addPayee.get("accno") as FormControl;
  }
  get raccno(): FormControl{
    return this.addPayee.get("raccno") as FormControl;
  }
  get saveBen(): FormControl{
    return this.addPayee.get("saveBen") as FormControl;
  }
  get nickname(): FormControl{
    return this.addPayee.get("nickname") as FormControl;
  }

}
