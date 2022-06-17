import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetUserIDComponent } from './forget-user-id.component';

describe('ForgetUserIDComponent', () => {
  let component: ForgetUserIDComponent;
  let fixture: ComponentFixture<ForgetUserIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetUserIDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetUserIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
