import { Component, OnInit } from '@angular/core';
import { UserModel } from './user-model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
 ngOnInit(){
   
 }

 userModel: UserModel = new UserModel();

 userModels: Array<UserModel> = new Array<UserModel>();

 Add(){
  this.userModels.push(this.userModel);
  this.userModel = new UserModel();
 }
}
