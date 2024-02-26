import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatDesReaprovisionnementsComponent } from './achat-des-reaprovisionnements.component';

describe('AchatDesReaprovisionnementsComponent', () => {
  let component: AchatDesReaprovisionnementsComponent;
  let fixture: ComponentFixture<AchatDesReaprovisionnementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AchatDesReaprovisionnementsComponent]
    });
    fixture = TestBed.createComponent(AchatDesReaprovisionnementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
