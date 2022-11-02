import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionListenerComponent } from './session-listener.component';

describe('SessionListenerComponent', () => {
  let component: SessionListenerComponent;
  let fixture: ComponentFixture<SessionListenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionListenerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
