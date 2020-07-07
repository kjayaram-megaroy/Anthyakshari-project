import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingRoomComponent } from './matching-room.component';

describe('MatchingRoomComponent', () => {
  let component: MatchingRoomComponent;
  let fixture: ComponentFixture<MatchingRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchingRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
