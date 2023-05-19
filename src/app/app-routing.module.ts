import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
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

const routes: Routes = [

  {path:"", component:HomeComponent},
  {path:"errorpage", component:ErrorpageComponent},
  {path:"register", component:RegistrationComponent},
  {path:"login", component:LoginComponent},
  {path:"userpanel", component:UserpanelComponent},
  {path:"adminpanel", component:AdminpanelComponent},
  {path:"footer", component:FooterComponent},
  {path:"logout", component:LogoutComponent},
  {path:"cart", component:CartComponent},
  {path:"checkout", component:CheckoutComponent},
  {path:"manage", component:ManageComponent},
  {path:"userdetails", component:UserdetailsComponent},
  {path:"orderdetails", component:OrderdetailsComponent},
  {path:"addproduct", component:AddproductComponent},
  {path:"updateproduct", component:UpdateproductComponent},
  {path:"updateuser", component:UpdateuserComponent},
  {path:"myprofile", component:MyprofileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
