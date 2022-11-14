import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingPanelComponent } from './billing-panel.component';

describe('BillingPanelComponent', () => {
  let component: BillingPanelComponent;
  let fixture: ComponentFixture<BillingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
