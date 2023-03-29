
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../services/book-data.service'
interface Book{
id:number;
bookName:string;

}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent  {
//  imageNames = ['ikigai1.PNG','atomichabit1.PNG','pyschologyofMoney1.PNG','thinkandgrowrich.PNG','lifeofPI.PNG','lightcanotc.PNG'];
 //fictionBook =['lifeofPI.PNG','lightcanotc.PNG','Prideandprejudice.PNG'];
 bookArray=[];
 imageNames=[];
 searchText;

 constructor(
  private bookDataService: BookDataService
 ){
 }

 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getBook()
 
 }

 onDrop(event: CdkDragDrop<string[]>) {
  console.log("previous index== ",event.previousIndex)
  console.log("current index== ",event.currentIndex)
  moveItemInArray(this.imageNames , event.previousIndex, event.currentIndex);

}

getBook(){
 // console.log(Booksearch)
  this.imageNames = []
  this.bookDataService.getBookData().subscribe((data:any) => {
    console.log(data);
    this.bookArray = data;
   // console.log(this.bookArray[0])
    for(let i=0; i < this.bookArray.length; i++){
     // let name = this.bookArray[i].bookDetails.bookName.replace(/\s/g, '');

        this.imageNames.push({"name":  this.bookArray[i].bookDetails.bookName + '.PNG',
        "id": this.bookArray[i].bookId});
    }
    console.log("--",this.imageNames)
   
  })
 
  
}

}
