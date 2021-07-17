import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMobilComponent } from './detail-mobil.component';

describe('DetailMobilComponent', () => {
  let component: DetailMobilComponent;
  let fixture: ComponentFixture<DetailMobilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMobilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMobilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
