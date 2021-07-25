import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedSubscriptionComponent } from './updated-subscription.component';

describe('UpdatedSubscriptionComponent', () => {
  let component: UpdatedSubscriptionComponent;
  let fixture: ComponentFixture<UpdatedSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
