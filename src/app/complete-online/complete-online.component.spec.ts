import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteOnlineComponent } from './complete-online.component';

describe('CompleteOnlineComponent', () => {
  let component: CompleteOnlineComponent;
  let fixture: ComponentFixture<CompleteOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
