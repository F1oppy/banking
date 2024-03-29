import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMPSTransactionComponent } from './imps-transaction.component';

describe('IMPSTransactionComponent', () => {
  let component: IMPSTransactionComponent;
  let fixture: ComponentFixture<IMPSTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IMPSTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IMPSTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
