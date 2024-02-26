import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfertDesStockComponent } from './transfert-des-stock.component';

describe('TransfertDesStockComponent', () => {
  let component: TransfertDesStockComponent;
  let fixture: ComponentFixture<TransfertDesStockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransfertDesStockComponent]
    });
    fixture = TestBed.createComponent(TransfertDesStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
