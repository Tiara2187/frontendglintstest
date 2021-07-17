import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMobilComponent } from './list-mobil.component';

describe('ListMobilComponent', () => {
  let component: ListMobilComponent;
  let fixture: ComponentFixture<ListMobilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMobilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMobilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
