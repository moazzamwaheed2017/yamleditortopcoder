import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconManageComponent } from './icon-manage.component';

describe('IconManageComponent', () => {
  let component: IconManageComponent;
  let fixture: ComponentFixture<IconManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
