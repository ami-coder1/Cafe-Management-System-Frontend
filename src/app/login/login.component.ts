import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  msg = '';
  
 
constructor(private rs : RegistrationService, private _router : Router){ }

ngOnInit(){

}
loginUser(){
  this.rs.loginUserFormRemote(this.user).subscribe(
    data =>{
      console.log("response recieved");
      this._router.navigate(['userpanel']);
      this.rs.showSuccess("Logged in successfully !!", "Log in");
      
  },
    error => 
    {
      console.log("exception occoured");
      this.rs.showError("Invalid Credentials !", "Login failed ");
}
)
}



/*
gotregistration(){
 
  this._router.navigate(['/registration'])
}*/

}
