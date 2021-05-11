import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconMoveComponent } from './icon-move.component';

describe('IconMoveComponent', () => {
  let component: IconMoveComponent;
  let fixture: ComponentFixture<IconMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconMoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
