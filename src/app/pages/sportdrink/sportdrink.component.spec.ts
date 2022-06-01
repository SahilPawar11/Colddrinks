import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportdrinkComponent } from './sportdrink.component';

describe('SportdrinkComponent', () => {
  let component: SportdrinkComponent;
  let fixture: ComponentFixture<SportdrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportdrinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportdrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
