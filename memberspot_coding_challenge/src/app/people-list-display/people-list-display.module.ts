import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListDisplayComponent } from './people-list-display/people-list-display.component';
import { PeopleListItemComponent } from './people-list-item/people-list-item.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    PeopleListDisplayComponent,
    PeopleListItemComponent,
  ],
  exports: [PeopleListDisplayComponent, MatPaginatorModule],
  imports: [CommonModule, MatPaginatorModule],
})
export class PeopleListDisplayModule {}
