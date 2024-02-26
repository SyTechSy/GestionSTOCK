import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningDeplacementComponent } from './planning-deplacement.component';

describe('PlanningDeplacementComponent', () => {
  let component: PlanningDeplacementComponent;
  let fixture: ComponentFixture<PlanningDeplacementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanningDeplacementComponent]
    });
    fixture = TestBed.createComponent(PlanningDeplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
