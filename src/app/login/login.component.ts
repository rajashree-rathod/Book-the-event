import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class  LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(
    private authService: AuthService
  ){}

  ngOnInit() {
    
    this.loginForm= new FormGroup(
      {
        email: new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('',[Validators.required,Validators.minLength(6)])
      }
    )
  }

  onLogin(data: FormGroup){
    console.log(data.value);
    this.authService.userAuth(data.value);
  }

}
