import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-payee',
  templateUrl: './add-payee.component.html',
  styleUrls: ['./add-payee.component.css']
})
export class AddPayeeComponent implements OnInit {

  repeatAccount: string = 'node';

  constructor() { }

  ngOnInit(): void {
  }

  addPayee= new FormGroup({
    beneficiaryName: new FormControl("",[Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]),
    beneficiaryAccNo: new FormControl("",[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),
    beneficiaryAccNoRe: new FormControl(""),
    saveBen: new FormControl(""),
    nickname: new FormControl(""),
  });

  beneficiarySubmitted(){
    if(this.beneficiaryAccNo.value == this.beneficiaryAccNoRe.value){
      console.log(this.addPayee.valid);
      this.repeatAccount = 'none'
    }else{
      this.repeatAccount='inline'
    }
  }

  get beneficiaryName(): FormControl{
    return this.addPayee.get("beneficiaryName") as FormControl;
  }
  get beneficiaryAccNo(): FormControl{
    return this.addPayee.get("beneficiaryAccNo") as FormControl;
  }
  get beneficiaryAccNoRe(): FormControl{
    return this.addPayee.get("beneficiaryAccNoRe") as FormControl;
  }
  get saveBen(): FormControl{
    return this.addPayee.get("saveBen") as FormControl;
  }
  get nickname(): FormControl{
    return this.addPayee.get("nickname") as FormControl;
  }

}
