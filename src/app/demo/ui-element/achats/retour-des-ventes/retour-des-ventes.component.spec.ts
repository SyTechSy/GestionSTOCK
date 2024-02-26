import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetourDesVentesComponent } from './retour-des-ventes.component';

describe('RetourDesVentesComponent', () => {
  let component: RetourDesVentesComponent;
  let fixture: ComponentFixture<RetourDesVentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetourDesVentesComponent]
    });
    fixture = TestBed.createComponent(RetourDesVentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
