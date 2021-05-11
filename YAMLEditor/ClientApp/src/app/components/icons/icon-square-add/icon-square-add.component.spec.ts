import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSquareAddComponent } from './icon-square-add.component';

describe('IconSquareAddComponent', () => {
  let component: IconSquareAddComponent;
  let fixture: ComponentFixture<IconSquareAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconSquareAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSquareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
