import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCaretComponent } from './icon-caret.component';

describe('IconCaretComponent', () => {
  let component: IconCaretComponent;
  let fixture: ComponentFixture<IconCaretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconCaretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCaretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
