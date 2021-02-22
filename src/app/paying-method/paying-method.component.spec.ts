import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayingMethodComponent } from './paying-method.component';

describe('PayingMethodComponent', () => {
  let component: PayingMethodComponent;
  let fixture: ComponentFixture<PayingMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayingMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayingMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
