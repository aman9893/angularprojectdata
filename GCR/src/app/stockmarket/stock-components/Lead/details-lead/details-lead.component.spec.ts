import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLeadComponent } from './details-lead.component';

describe('DetailsLeadComponent', () => {
  let component: DetailsLeadComponent;
  let fixture: ComponentFixture<DetailsLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
