import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconGitlabComponent } from './icon-gitlab.component';

describe('IconGitlabComponent', () => {
  let component: IconGitlabComponent;
  let fixture: ComponentFixture<IconGitlabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconGitlabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconGitlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
