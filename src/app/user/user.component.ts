import { Component, OnInit } from '@angular/core';
import { UserModel } from './user-model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
 imageNames = ['ikigai1.PNG','atomichabit1.PNG','pyschologyofMoney1.PNG','thinkandgrowrich.PNG'];
 fictionBook =['lifeofPI.PNG','lightcanotc.PNG','Prideandprejudice.PNG'];
 ngOnInit(){
   
 }

 
}
