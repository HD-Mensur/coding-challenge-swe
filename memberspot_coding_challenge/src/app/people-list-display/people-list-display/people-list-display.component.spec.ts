import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleListDisplayComponent } from './people-list-display.component';

describe('PeopleListDisplayComponent', () => {
  let component: PeopleListDisplayComponent;
  let fixture: ComponentFixture<PeopleListDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleListDisplayComponent]
    });
    fixture = TestBed.createComponent(PeopleListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
