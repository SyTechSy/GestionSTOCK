import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplacementsDesStocksComponent } from './emplacements-des-stocks.component';

describe('EmplacementsDesStocksComponent', () => {
  let component: EmplacementsDesStocksComponent;
  let fixture: ComponentFixture<EmplacementsDesStocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmplacementsDesStocksComponent]
    });
    fixture = TestBed.createComponent(EmplacementsDesStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
