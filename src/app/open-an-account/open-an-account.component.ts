import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-an-account',
  templateUrl: './open-an-account.component.html',
  styleUrls: ['./open-an-account.component.css']
})
export class OpenAnAccountComponent implements OnInit {
  accountType = "open-an-account";
  constructor() { }

  ngOnInit(): void {
  }

}
