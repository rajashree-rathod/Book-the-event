import { Component } from '@angular/core';

@Component({
  selector: 'app-fiction-book',
  templateUrl: './fiction-book.component.html',
  styleUrls: ['./fiction-book.component.scss'],
  inputs: ['fictnBook']
})
export class FictionBookComponent {
  
  fictnBook!:string;
 

}
