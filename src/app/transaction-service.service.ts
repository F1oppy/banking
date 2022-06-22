import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {
  url = "http://localhost:8080/NEFTTransaction";

  constructor(private http:HttpClient) {}
  users(){
    return this.http.get(this.url);
  }
}
