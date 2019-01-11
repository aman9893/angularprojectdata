import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStockComponent } from './home-stock.component';

describe('HomeStockComponent', () => {
  let component: HomeStockComponent;
  let fixture: ComponentFixture<HomeStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
