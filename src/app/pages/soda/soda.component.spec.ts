import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SodaComponent } from './soda.component';

describe('SodaComponent', () => {
  let component: SodaComponent;
  let fixture: ComponentFixture<SodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SodaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
