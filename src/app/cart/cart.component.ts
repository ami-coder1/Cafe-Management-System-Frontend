import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart = new Cart();


  constructor(private rs : RegistrationService, private route : Router) {


  }

  ngOnInit(): void {
      
    this.cartDisplay();
    
  }

  cartDisplay() {

    return this.rs.cartDisplay().subscribe((data : any) => 
    {
      this.cart = data;
    })
  }
}
