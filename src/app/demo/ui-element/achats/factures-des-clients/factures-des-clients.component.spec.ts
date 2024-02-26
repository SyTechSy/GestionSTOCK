import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturesDesClientsComponent } from './factures-des-clients.component';

describe('FacturesDesClientsComponent', () => {
  let component: FacturesDesClientsComponent;
  let fixture: ComponentFixture<FacturesDesClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacturesDesClientsComponent]
    });
    fixture = TestBed.createComponent(FacturesDesClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
