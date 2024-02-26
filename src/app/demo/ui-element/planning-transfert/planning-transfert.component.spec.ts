import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningTransfertComponent } from './planning-transfert.component';

describe('PlanningTransfertComponent', () => {
  let component: PlanningTransfertComponent;
  let fixture: ComponentFixture<PlanningTransfertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanningTransfertComponent]
    });
    fixture = TestBed.createComponent(PlanningTransfertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
