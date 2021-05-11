import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedUserListComponent } from './unassigned-user-list.component';

describe('UnassignedUserListComponent', () => {
  let component: UnassignedUserListComponent;
  let fixture: ComponentFixture<UnassignedUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnassignedUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnassignedUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
