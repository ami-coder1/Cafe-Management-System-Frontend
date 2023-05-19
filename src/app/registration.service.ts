import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from './user';
import { Observable } from 'rxjs/internal/Observable';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  

  constructor(private httpclient : HttpClient, private toastr: ToastrService) { }

  public loginUserFormRemote(user: User):Observable<any> {
  
    return this.httpclient.post<any>("http://localhost:8080/user/login",user)
  }

  public registerUserFormRemote(user: User):Observable<any> {
    
    return this.httpclient.post<any>("http://localhost:8080/user/register",user)
  }

  userDisplayAllData() {

    return this.httpclient.get("http://localhost:8080/user/list");
  }

  cartDisplay() {

    return this.httpclient.get("http://localhost:8080/cart/list");
  }

  showSuccess(message: string | undefined, title: string | undefined){
    this.toastr.success(message, title)
}

showError(message: string | undefined, title: string | undefined){
    this.toastr.error(message, title)
}

showInfo(message: string | undefined, title: string | undefined){
    this.toastr.info(message, title)
}

showWarning(message: string | undefined, title: string | undefined){
    this.toastr.warning(message, title)
}
}


