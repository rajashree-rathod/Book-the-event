import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookDataService } from 'src/app/services/book-data.service';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss']
})
export class BookInfoComponent {
  bookDetails: any;
  bookId: number;

  constructor(
    private bookDataService: BookDataService,
    private router: ActivatedRoute
   ){
   }

   ngOnInit(): void {
    this.bookId = this.router.snapshot.params["id"];
    this.getBook()
   }


   getBook(){
    // console.log(Booksearch)
    
     this.bookDataService.getBookData().subscribe((data:any) => {
       console.log(data);
       //this.bookDetails = data;
       for(let i=0;i< data.length ;i++){       
      if(this.bookId == data[i].bookId){
        this.bookDetails= data[i];
        break;
      }
       }
       //console.log(this.bookArray[0])
      
     })
    
     
   }
}
