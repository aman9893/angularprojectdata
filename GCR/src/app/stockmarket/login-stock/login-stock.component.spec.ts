import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginStockComponent } from './login-stock.component';

describe('LoginStockComponent', () => {
  let component: LoginStockComponent;
  let fixture: ComponentFixture<LoginStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
