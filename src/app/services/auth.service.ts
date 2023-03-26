import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router
  ) { }

  userAuth(data: any){
    if(data.email == "Admin" && data.password == "Admin@123"){
      this.isLoggedIn.next(true);
      this.router.navigate(['/user']);
    }
    
  }

}
