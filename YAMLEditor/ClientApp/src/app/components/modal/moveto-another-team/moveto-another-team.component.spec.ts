import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovetoAnotherTeamComponent } from './moveto-another-team.component';

describe('MovetoAnotherTeamComponent', () => {
  let component: MovetoAnotherTeamComponent;
  let fixture: ComponentFixture<MovetoAnotherTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovetoAnotherTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovetoAnotherTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
