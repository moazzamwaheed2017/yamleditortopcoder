import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSettingComponent } from './icon-setting.component';

describe('IconSettingComponent', () => {
  let component: IconSettingComponent;
  let fixture: ComponentFixture<IconSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
