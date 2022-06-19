import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountLockedPageComponent } from './account-locked-page.component';

describe('AccountLockedPageComponent', () => {
  let component: AccountLockedPageComponent;
  let fixture: ComponentFixture<AccountLockedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountLockedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountLockedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
