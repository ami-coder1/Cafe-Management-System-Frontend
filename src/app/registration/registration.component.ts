import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
    msg = '';
   constructor(private rs : RegistrationService, private _router : Router) {
    
   }
   ngOnInit() {
     
   }
   registerUser(){
    this.rs.registerUserFormRemote(this.user).subscribe(
      data =>{
        console.log("response recieved")
      
       this._router.navigate(['login']);
       this.rs.showSuccess("Registration done successfully !!", "Sign up");

    },
      error => 
      {
        console.log("exception occurred");
       this.rs.showError("Email Id already exists !", "Registration failed ");
  }
    )
   }

}
