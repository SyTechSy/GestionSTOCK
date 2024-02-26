import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementsRecusComponent } from './paiements-recus.component';

describe('PaiementsRecusComponent', () => {
  let component: PaiementsRecusComponent;
  let fixture: ComponentFixture<PaiementsRecusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaiementsRecusComponent]
    });
    fixture = TestBed.createComponent(PaiementsRecusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
