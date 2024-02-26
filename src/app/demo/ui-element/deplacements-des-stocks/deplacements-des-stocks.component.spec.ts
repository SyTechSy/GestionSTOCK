import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeplacementsDesStocksComponent } from './deplacements-des-stocks.component';

describe('DeplacementsDesStocksComponent', () => {
  let component: DeplacementsDesStocksComponent;
  let fixture: ComponentFixture<DeplacementsDesStocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeplacementsDesStocksComponent]
    });
    fixture = TestBed.createComponent(DeplacementsDesStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
