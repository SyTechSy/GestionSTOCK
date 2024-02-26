import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationProduitComponent } from './reservation-produit.component';

describe('ReservationProduitComponent', () => {
  let component: ReservationProduitComponent;
  let fixture: ComponentFixture<ReservationProduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationProduitComponent]
    });
    fixture = TestBed.createComponent(ReservationProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
