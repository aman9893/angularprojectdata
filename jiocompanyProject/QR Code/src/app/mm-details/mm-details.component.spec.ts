import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmDetailsComponent } from './mm-details.component';

describe('MmDetailsComponent', () => {
  let component: MmDetailsComponent;
  let fixture: ComponentFixture<MmDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
