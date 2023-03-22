import { Component } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
  inputs: ['bookName']
})
export class CardInfoComponent {
  bookName!: string;
}
