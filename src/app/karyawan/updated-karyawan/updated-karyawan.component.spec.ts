import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedKaryawanComponent } from './updated-karyawan.component';

describe('UpdatedKaryawanComponent', () => {
  let component: UpdatedKaryawanComponent;
  let fixture: ComponentFixture<UpdatedKaryawanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedKaryawanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedKaryawanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
