import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
    name: new FormControl(""),
    accno: new FormControl(""),
    raccno: new FormControl(""),
    saveBen: new FormControl(""),
    nickname: new FormControl(""),
  });

  beneficiarySubmitted(){
    console.log(this.addPayee.value);
  }

}
