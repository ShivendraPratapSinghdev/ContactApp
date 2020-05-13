import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatePhoneNumberComponent } from './activate-phone-number.component';

describe('ActivatePhoneNumberComponent', () => {
  let component: ActivatePhoneNumberComponent;
  let fixture: ComponentFixture<ActivatePhoneNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivatePhoneNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatePhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
