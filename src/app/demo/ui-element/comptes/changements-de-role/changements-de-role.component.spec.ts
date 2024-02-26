import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangementsDeRoleComponent } from './changements-de-role.component';

describe('ChangementsDeRoleComponent', () => {
  let component: ChangementsDeRoleComponent;
  let fixture: ComponentFixture<ChangementsDeRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangementsDeRoleComponent]
    });
    fixture = TestBed.createComponent(ChangementsDeRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
