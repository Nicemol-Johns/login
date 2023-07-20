// USER SIGNUP and LOGIN
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
//import { User } from '../app/login/user.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl ='http://localhost:3000/curriculum-tracker';

  constructor(private http:HttpClient) { }
  
  //sign up user
  signupuser(user:any){
    console.log(`Connecting to Server ${user}`)
    return this.http.post<any>(`${this.apiUrl}/user-signup`,user);
  }
  //login user
  login(email:string,password:string):Observable<any>{
    return this.http.post(`${this.apiUrl}/login`,{email,password});
  }
  
  }


