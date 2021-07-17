import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedPerusahaanComponent } from './updated-perusahaan.component';

describe('UpdatedPerusahaanComponent', () => {
  let component: UpdatedPerusahaanComponent;
  let fixture: ComponentFixture<UpdatedPerusahaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedPerusahaanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedPerusahaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
