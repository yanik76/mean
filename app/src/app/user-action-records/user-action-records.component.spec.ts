import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActionRecordsComponent } from './user-action-records.component';

describe('UserActionRecordsComponent', () => {
  let component: UserActionRecordsComponent;
  let fixture: ComponentFixture<UserActionRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserActionRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserActionRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
