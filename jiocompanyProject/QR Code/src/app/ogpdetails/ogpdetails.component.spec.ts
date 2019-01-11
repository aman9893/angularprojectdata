import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OGPdetailsComponent } from './ogpdetails.component';

describe('OGPdetailsComponent', () => {
  let component: OGPdetailsComponent;
  let fixture: ComponentFixture<OGPdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OGPdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OGPdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
