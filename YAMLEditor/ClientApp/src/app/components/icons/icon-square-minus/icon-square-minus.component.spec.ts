import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSquareMinusComponent } from './icon-square-minus.component';

describe('IconSquareMinusComponent', () => {
  let component: IconSquareMinusComponent;
  let fixture: ComponentFixture<IconSquareMinusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconSquareMinusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSquareMinusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
