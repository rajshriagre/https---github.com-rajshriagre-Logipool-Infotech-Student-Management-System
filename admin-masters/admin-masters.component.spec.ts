import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMastersComponent } from './admin-masters.component';

describe('AdminMastersComponent', () => {
  let component: AdminMastersComponent;
  let fixture: ComponentFixture<AdminMastersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMastersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
