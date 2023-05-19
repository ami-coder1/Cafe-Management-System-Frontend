import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  constructor(private route : Router) {}

  ngOnInit() {
    
    
  }

  manageProduct() {

    this.route.navigate(['manage']);
  }

  userDetails() {

    this.route.navigate(['userdetails']);
  }

  orderDetails() {

    this.route.navigate(['orderdetails']);
  }
}
