import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient) { }

  signupuser(user:any){
    console.log(`Connecting to Server ${user}`)
    return this.http.post<any>("http://localhost:3000/api/user-signup",user);
  }
}
