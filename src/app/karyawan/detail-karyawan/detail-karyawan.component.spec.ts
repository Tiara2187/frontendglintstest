import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailKaryawanComponent } from './detail-karyawan.component';

describe('DetailKaryawanComponent', () => {
  let component: DetailKaryawanComponent;
  let fixture: ComponentFixture<DetailKaryawanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailKaryawanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailKaryawanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
