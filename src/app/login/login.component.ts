import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  Login= new FormGroup({
    userid: new FormControl("",[Validators.required, Validators.minLength(2)]),
    newpassword: new FormControl("",[Validators.required, Validators.minLength(8), Validators.maxLength(10)]),
  });

  loginSubmitted(){
    this.http.get<any>("//localhost:8080/register")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.userid == this.Login.value.userid && a.newpassword == this.Login.value.newpassword
      });
      if(user){
        alert("Login Successfull")
        this.Login.reset();
        this.router.navigate(['dashboard'])
      }else{
        alert("User not found");
      }
    },err=>{
      alert("Something went wrong")
    })
  }
  get userid(): FormControl{
    return this.Login.get("userid") as FormControl;
  }
  get newpassword(): FormControl{
    return this.Login.get("newpassword") as FormControl;
  }
}
