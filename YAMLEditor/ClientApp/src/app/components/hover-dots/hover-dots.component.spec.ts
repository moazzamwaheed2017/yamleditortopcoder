import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverDotsComponent } from './hover-dots.component';

describe('HoverDotsComponent', () => {
  let component: HoverDotsComponent;
  let fixture: ComponentFixture<HoverDotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoverDotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
