import { Component, OnInit } from '@angular/core';
import { UserModel } from './user-model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
 imageNames = ['mrutunjay1.PNG', 'ikigai1.PNG','alchemist1.PNG']
 ngOnInit(){
   
 }

 
}
