import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviInventaireComponent } from './suivi-inventaire.component';

describe('SuiviInventaireComponent', () => {
  let component: SuiviInventaireComponent;
  let fixture: ComponentFixture<SuiviInventaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuiviInventaireComponent]
    });
    fixture = TestBed.createComponent(SuiviInventaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
