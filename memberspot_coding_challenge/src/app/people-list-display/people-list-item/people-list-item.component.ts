import { Component, Input } from '@angular/core';
import { IPerson } from 'src/app/interfaces/IPerson';

@Component({
  selector: 'app-people-list-item',
  templateUrl: './people-list-item.component.html',
  styleUrls: ['./people-list-item.component.scss'],
})
export class PeopleListItemComponent {
  @Input() person!: IPerson;

  placeholderImgUrl =
    'https://images.placeholders.dev/?width=600&height=900&text=exImage&bgColor=%23f7f6f6&textColor=%236d6e71';
}
