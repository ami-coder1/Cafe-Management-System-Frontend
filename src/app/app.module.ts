import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UserpanelComponent } from './userpanel/userpanel.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ManageComponent } from './manage/manage.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ErrorpageComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    UserpanelComponent,
    AdminpanelComponent,
    FooterComponent,
    LogoutComponent,
    CartComponent,
    CheckoutComponent,
    ManageComponent,
    UserdetailsComponent,
    OrderdetailsComponent,
    AddproductComponent,
    UpdateproductComponent,
    UpdateuserComponent,
    MyprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
