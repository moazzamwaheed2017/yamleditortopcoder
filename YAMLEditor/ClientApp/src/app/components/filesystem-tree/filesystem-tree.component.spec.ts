import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesystemTreeComponent } from './filesystem-tree.component';

describe('FilesystemTreeComponent', () => {
  let component: FilesystemTreeComponent;
  let fixture: ComponentFixture<FilesystemTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesystemTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesystemTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
