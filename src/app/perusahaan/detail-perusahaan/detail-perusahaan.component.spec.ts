import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPerusahaanComponent } from './detail-perusahaan.component';

describe('DetailPerusahaanComponent', () => {
  let component: DetailPerusahaanComponent;
  let fixture: ComponentFixture<DetailPerusahaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPerusahaanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPerusahaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
