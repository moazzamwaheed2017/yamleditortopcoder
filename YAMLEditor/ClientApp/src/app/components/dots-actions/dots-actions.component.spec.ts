import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotsActionsComponent } from './dots-actions.component';

describe('DotsActionsComponent', () => {
  let component: DotsActionsComponent;
  let fixture: ComponentFixture<DotsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotsActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
