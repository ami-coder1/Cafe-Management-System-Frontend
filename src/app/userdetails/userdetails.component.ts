import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  user : any;

  constructor(private rs : RegistrationService) { }

  ngOnInit() : void {

    this.userDisplayAllData();
  }

  userDisplayAllData() {

    return this.rs.userDisplayAllData().subscribe((data:any)=>
  {
    this.user = data;
  })
  }
}
