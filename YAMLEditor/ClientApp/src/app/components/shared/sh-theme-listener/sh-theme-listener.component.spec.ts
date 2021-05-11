import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShThemeListenerComponent } from './sh-theme-listener.component';

describe('ShThemeListenerComponent', () => {
  let component: ShThemeListenerComponent;
  let fixture: ComponentFixture<ShThemeListenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShThemeListenerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShThemeListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
