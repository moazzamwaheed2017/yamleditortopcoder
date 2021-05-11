import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconVendorsComponent } from './icon-vendors.component';

describe('IconVendorsComponent', () => {
  let component: IconVendorsComponent;
  let fixture: ComponentFixture<IconVendorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconVendorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
