import { Component } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
  inputs: ['bookInfo']
})
export class CardInfoComponent {
  bookInfo!: any;
  
}
