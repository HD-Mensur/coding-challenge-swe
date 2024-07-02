import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleListItemComponent } from './people-list-item.component';

describe('PeopleListItemComponent', () => {
  let component: PeopleListItemComponent;
  let fixture: ComponentFixture<PeopleListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleListItemComponent]
    });
    fixture = TestBed.createComponent(PeopleListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
