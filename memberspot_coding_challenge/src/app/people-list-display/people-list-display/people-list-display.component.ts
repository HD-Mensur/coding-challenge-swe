import { Component, Input } from '@angular/core';
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import { SwApiService } from '../services/sw-api.service';
import { PageEvent } from '@angular/material/paginator';
import { IPerson } from 'src/app/interfaces/IPerson';

@Component({
  selector: 'app-people-list-display',
  templateUrl: './people-list-display.component.html',
  styleUrls: ['./people-list-display.component.scss'],
})
export class PeopleListDisplayComponent {
  constructor(private swApi: SwApiService) {}
  private searchTerm$ = new Subject<string>();

  people$!: Observable<IPerson[]>;
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;
  pageSizeOptions = [5, 10, 25, 50];

  fetchedPeopleForSearchterm: IPerson[] = [];
  pageEvent!: PageEvent;
  paginatedPeople!: IPerson[];

  async ngOnInit() {
    this.people$ = this.searchTerm$.pipe(
      debounceTime(666),
      distinctUntilChanged(),
      switchMap((term) => {
        return this.swApi.getPeopleWithHomeworld(term);
      })
    );

    this.people$.subscribe((people) => {
      this.fetchedPeopleForSearchterm = people;

      this.paginatedPeople = people.slice(
        (this.currentPage - 1) * this.itemsPerPage,
        this.currentPage * this.itemsPerPage
      );

      this.totalItems = people.length;
    });
  }

  search(term: string): void {
    if (term === '') {
      this.paginatedPeople = [];
      this.totalItems = 0;
      return;
    }
    this.searchTerm$.next(term);
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value.toLowerCase();
  }

  handlePageEvent(e: PageEvent) {
    this.itemsPerPage = e.pageSize;

    if (!this.fetchedPeopleForSearchterm.length) {
      return;
    }

    this.paginatedPeople = this.fetchedPeopleForSearchterm.slice(
      e.pageIndex * e.pageSize,
      e.pageIndex * e.pageSize + e.pageSize
    );
  }
}
