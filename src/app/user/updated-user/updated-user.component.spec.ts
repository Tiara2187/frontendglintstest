import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedUserComponent } from './updated-user.component';

describe('UpdatedUserComponent', () => {
  let component: UpdatedUserComponent;
  let fixture: ComponentFixture<UpdatedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
