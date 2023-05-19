import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent implements OnInit {

  constructor(private route : Router, private rs : RegistrationService) {

  }

  ngOnInit(): void {

    
  }

  showToasterSuccess(){

    this.rs.showSuccess("Logged out successfully !!", "Logout")
}

}
