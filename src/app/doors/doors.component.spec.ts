import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorsComponent } from './doors.component';

describe('DoorsComponent', () => {
  let component: DoorsComponent;
  let fixture: ComponentFixture<DoorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoorsComponent]
    });
    fixture = TestBed.createComponent(DoorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
