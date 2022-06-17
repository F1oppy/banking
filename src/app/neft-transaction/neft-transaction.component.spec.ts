import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NEFTTransactionComponent } from './neft-transaction.component';

describe('NEFTTransactionComponent', () => {
  let component: NEFTTransactionComponent;
  let fixture: ComponentFixture<NEFTTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NEFTTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NEFTTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
