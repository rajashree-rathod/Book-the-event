
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { UserModel } from './user-model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent  {
 imageNames = ['ikigai1.PNG','atomichabit1.PNG','pyschologyofMoney1.PNG','thinkandgrowrich.PNG','lifeofPI.PNG','lightcanotc.PNG'];
 fictionBook =['lifeofPI.PNG','lightcanotc.PNG','Prideandprejudice.PNG'];


 drop(event: CdkDragDrop<string[]>) {
  console.log("previous index== ",event.previousIndex)
  console.log("current index== ",event.currentIndex)
  moveItemInArray(this.imageNames, event.previousIndex, event.currentIndex);
}
}
