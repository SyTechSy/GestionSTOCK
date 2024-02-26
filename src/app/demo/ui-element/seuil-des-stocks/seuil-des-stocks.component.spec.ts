import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeuilDesStocksComponent } from './seuil-des-stocks.component';

describe('SeuilDesStocksComponent', () => {
  let component: SeuilDesStocksComponent;
  let fixture: ComponentFixture<SeuilDesStocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeuilDesStocksComponent]
    });
    fixture = TestBed.createComponent(SeuilDesStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
