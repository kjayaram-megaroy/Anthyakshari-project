import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageReusecodeComponent } from './homepage-reusecode.component';

describe('HomepageReusecodeComponent', () => {
  let component: HomepageReusecodeComponent;
  let fixture: ComponentFixture<HomepageReusecodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageReusecodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageReusecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
