import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOptionMenuComponent } from './button-option-menu.component';

describe('ButtonOptionMenuComponent', () => {
  let component: ButtonOptionMenuComponent;
  let fixture: ComponentFixture<ButtonOptionMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonOptionMenuComponent]
    });
    fixture = TestBed.createComponent(ButtonOptionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
