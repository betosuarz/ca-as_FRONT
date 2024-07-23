import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonasteryInfoComponent } from './monastery-info.component';

describe('MonasteryInfoComponent', () => {
  let component: MonasteryInfoComponent;
  let fixture: ComponentFixture<MonasteryInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonasteryInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonasteryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
