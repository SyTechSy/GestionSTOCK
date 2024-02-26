import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeDesClientsComponent } from './commande-des-clients.component';

describe('CommandeDesClientsComponent', () => {
  let component: CommandeDesClientsComponent;
  let fixture: ComponentFixture<CommandeDesClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommandeDesClientsComponent]
    });
    fixture = TestBed.createComponent(CommandeDesClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
