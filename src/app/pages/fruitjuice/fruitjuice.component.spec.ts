import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitjuiceComponent } from './fruitjuice.component';

describe('FruitjuiceComponent', () => {
  let component: FruitjuiceComponent;
  let fixture: ComponentFixture<FruitjuiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitjuiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitjuiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
