import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedMobilComponent } from './updated-mobil.component';

describe('UpdatedMobilComponent', () => {
  let component: UpdatedMobilComponent;
  let fixture: ComponentFixture<UpdatedMobilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedMobilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedMobilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
