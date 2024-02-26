import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustementDesStockComponent } from './ajustement-des-stock.component';

describe('AjustementDesStockComponent', () => {
  let component: AjustementDesStockComponent;
  let fixture: ComponentFixture<AjustementDesStockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjustementDesStockComponent]
    });
    fixture = TestBed.createComponent(AjustementDesStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
