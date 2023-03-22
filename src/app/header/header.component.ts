import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'

export interface User {
  name: string;
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  isLoggedIn!: boolean;

  constructor(private authService: AuthService , private router :Router){

  }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe((res:boolean) => {
      this.isLoggedIn = res;
    })
  }

  onLogout(){
     this.router.navigate(['/'])


  }

}
