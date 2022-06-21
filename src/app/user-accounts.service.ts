import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAccountsService {

  url ='http://localhost:8080/register';
  constructor(private http: HttpClient) { }
  saveuser(data:any)
  {
    return this.http.post(this.url,data)
  }
}
