import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconStreamsComponent } from './icon-streams.component';

describe('IconStreamsComponent', () => {
  let component: IconStreamsComponent;
  let fixture: ComponentFixture<IconStreamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconStreamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
