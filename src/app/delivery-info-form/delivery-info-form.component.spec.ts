import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryInfoFormComponent } from './delivery-info-form.component';

describe('DeliveryInfoFormComponent', () => {
  let component: DeliveryInfoFormComponent;
  let fixture: ComponentFixture<DeliveryInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
