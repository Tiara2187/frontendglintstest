import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPerusahaanComponent } from './add-perusahaan.component';

describe('AddPerusahaanComponent', () => {
  let component: AddPerusahaanComponent;
  let fixture: ComponentFixture<AddPerusahaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPerusahaanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPerusahaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
