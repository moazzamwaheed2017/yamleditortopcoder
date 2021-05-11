import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconYComponent } from './icon-y.component';

describe('IconYComponent', () => {
  let component: IconYComponent;
  let fixture: ComponentFixture<IconYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconYComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
