import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
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

  constructor(private authService: AuthService){

  }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe((res:boolean) => {
      this.isLoggedIn = res;
    })
  }

}
