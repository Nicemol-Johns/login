import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthserviceService } from './authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _auth:AuthserviceService,private router:Router){  }

  user = {
    name: '',
    email: '',
    ph: null,
    password:'',
    confirm_pwd:''
  };

  isConfirmInvalid(): boolean {
     return this.user.password !== this.user.confirm_pwd;
  }

    userSignup(){
      console.log(`Function called ${this.user}`)
      this._auth.signupuser(this.user).subscribe((res:any)=>{
        console.log('Success');
        this.router.navigate([res.api]);
      })

    }
  
}
