import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShSelectGroupsComponent } from './sh-select-groups.component';

describe('ShSelectGroupsComponent', () => {
  let component: ShSelectGroupsComponent;
  let fixture: ComponentFixture<ShSelectGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShSelectGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShSelectGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
